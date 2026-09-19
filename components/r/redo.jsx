import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/r41g3tbnt.css';
import '../../css/l/l4om5acet.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="r41g3tbnt"/><path class="l4om5acet"/></g>`,
		"fallback": "icon-park-outline:redo",
	});
}

export default Component;
