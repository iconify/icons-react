import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l57hr9diu.css';
import '../../css/v/v-b9irtdp.css';
import '../../css/m/mhnfz8baj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><symbol id="SVGUUWKNc3I" viewBox="0 0 291 291"><circle class="l57hr9diu"/><path class="v-b9irtdp"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 145.5 145.5; 45 145.5 145.5"/></path></symbol></defs><path class="mhnfz8baj"/><use width="291" height="291" href="#SVGUUWKNc3I" transform="translate(110.38 72.63)"/>`,
		"fallback": "meteocons:time-afternoon",
	});
}

export default Component;
