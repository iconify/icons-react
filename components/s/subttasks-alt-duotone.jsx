import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbxbaodhg.css';
import '../../css/t/t9ubtpbyo.css';
import '../../css/q/q1-p5obhk.css';
import '../../css/q/q90b_qbjv.css';
import '../../css/j/j9zbk3bom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vbxbaodhg"><rect transform="rotate(90 16 9)" class="t9ubtpbyo"/><rect transform="rotate(90 20 17)" class="q1-p5obhk"/><path class="q90b_qbjv"/><path class="j9zbk3bom"/></g>`,
		"fallback": "lets-icons:subttasks-alt-duotone",
	});
}

export default Component;
