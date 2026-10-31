import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/a/ag55v1bzv.css';
import '../../css/a/aqkgrvb1o.css';
import '../../css/a/adm_yluby.css';
import '../../css/o/oh---cbyh.css';
import '../../css/f/fz8hg5byu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="ag55v1bzv"/><path class="aqkgrvb1o"/><path class="adm_yluby"/><path class="oh---cbyh"/><path class="fz8hg5byu"/></g>`,
		"fallback": "withicons-retro:minus-circle",
	});
}

export default Component;
