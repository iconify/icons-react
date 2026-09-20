import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hwjpopd5k.css';
import '../../css/d/d8833x_wi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="hwjpopd5k"/><path class="d8833x_wi"/></g>`,
		"fallback": "streamline:interface-weather-fahrenheit-degrees-temperature-fahrenheit-degree-weather",
	});
}

export default Component;
