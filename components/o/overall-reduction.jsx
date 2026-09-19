import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/eg-tv-cxp.css';
import '../../css/s/s496tibhe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="eg-tv-cxp"/><path class="s496tibhe"/></g>`,
		"fallback": "icon-park-solid:overall-reduction",
	});
}

export default Component;
