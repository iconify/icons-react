import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/inx1i0bqc.css';
import '../../css/f/f11mo2b6x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="inx1i0bqc"/><path class="f11mo2b6x"/></g>`,
		"fallback": "icon-park-outline:men-jacket",
	});
}

export default Component;
