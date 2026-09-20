import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jqr8h_bmn.css';
import '../../css/b/bt_bysbaf.css';
import '../../css/m/m-l9f4hln.css';
import '../../css/j/jmon4qjrz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGmAhx2dHO)"><path class="jqr8h_bmn"/><path clip-rule="evenodd" class="bt_bysbaf"/><path clip-rule="evenodd" class="m-l9f4hln"/></g><defs><clipPath id="SVGmAhx2dHO"><path class="jmon4qjrz"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:premiere-elements",
	});
}

export default Component;
