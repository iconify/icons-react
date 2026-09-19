import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fpxz6_btx.css';
import '../../css/g/gc4sfh2ej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fpxz6_btx"/><path class="gc4sfh2ej"/></g>`,
		"fallback": "iconoir:safari",
	});
}

export default Component;
