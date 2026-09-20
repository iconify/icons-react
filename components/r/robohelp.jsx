import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c_mt3gbpw.css';
import '../../css/f/ff7_wib9n.css';
import '../../css/h/hnlzkbrjz.css';
import '../../css/j/jmon4qjrz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGmAhx2dHO)"><path class="c_mt3gbpw"/><path clip-rule="evenodd" class="ff7_wib9n"/><path clip-rule="evenodd" class="hnlzkbrjz"/></g><defs><clipPath id="SVGmAhx2dHO"><path class="jmon4qjrz"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:robohelp",
	});
}

export default Component;
