import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fgw8jg94a.css';
import '../../css/h/hehoqx8il.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="fgw8jg94a"/><path class="hehoqx8il"/></g>`,
		"fallback": "streamline:interface-weather-celsius-degrees-temperature-centigrade-celsius-degree-weather",
	});
}

export default Component;
