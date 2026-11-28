import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n3uwabccu.css';
import '../../css/z/ztli_d_ek.css';
import '../../css/m/mckmxfhkw.css';
import '../../css/q/quh1t-ouf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="n3uwabccu"/><path class="ztli_d_ek"/><path class="mckmxfhkw"/><path class="quh1t-ouf"/></g>`,
		"fallback": "iconaut:screen-share",
	});
}

export default Component;
