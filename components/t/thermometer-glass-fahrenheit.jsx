import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuk73z6nh.css';
import '../../css/w/wp1vgjbpl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><symbol id="SVG7ARWWbSl" viewBox="0 0 118 278"><path class="nuk73z6nh"/></symbol><symbol id="SVGYOh97vgA" viewBox="0 0 99.5 70.9"><path class="wp1vgjbpl"/></symbol></defs><use width="118" height="278" href="#SVG7ARWWbSl" transform="translate(197 117)"/><use width="99.5" height="70.9" href="#SVGYOh97vgA" transform="translate(314 250)"/>`,
		"fallback": "meteocons:thermometer-glass-fahrenheit",
	});
}

export default Component;
