import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01-jxany.css';
import '../../css/e/e7304gbzl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><symbol id="SVGFjSUBeLT" viewBox="0 0 72 168"><circle class="h01-jxany"/><path class="e7304gbzl"/></symbol></defs><use width="72" height="168" href="#SVGFjSUBeLT" transform="translate(220 205)"/>`,
		"fallback": "meteocons:thermometer-mercury-fill",
	});
}

export default Component;
