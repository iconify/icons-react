import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vzdh52bep.css';
import '../../css/s/sqcfi-8yu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><ellipse class="vzdh52bep"/><path class="sqcfi-8yu"/></g>`,
		"fallback": "streamline:interface-weather-hurricane-twister-tornado-hurricane-cyclone-disaster-natural-weather",
	});
}

export default Component;
