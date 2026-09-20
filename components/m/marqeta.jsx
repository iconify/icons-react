import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s79cvv-0n.css';

const viewBox = {"width":220.93,"height":131.94};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><symbol id="SVG6W14HcPs" viewBox="0 0 220.93 131.94"><path class="s79cvv-0n"/></symbol></defs><use width="220.93" height="131.94" href="#SVG6W14HcPs"/>`,
		"fallback": "thesvg:marqeta",
	});
}

export default Component;
