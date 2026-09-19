import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/bmax3yb1x.css';
import '../../css/m/mr-c0lbac.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="bmax3yb1x"/><path class="mr-c0lbac"/></g>`,
		"fallback": "icon-park-outline:vip-one",
	});
}

export default Component;
