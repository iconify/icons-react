import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuk73z6nh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><symbol id="SVG7ARWWbSl" viewBox="0 0 118 278"><path class="nuk73z6nh"/></symbol></defs><use width="118" height="278" href="#SVG7ARWWbSl" transform="translate(197 117)"/>`,
		"fallback": "meteocons:thermometer-glass",
	});
}

export default Component;
