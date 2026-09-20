import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc--wpv5i.css';
import '../../css/u/u_tgcnb_i.css';
import '../../css/o/ozfj1otnl.css';
import '../../css/w/wqjspob6s.css';

const viewBox = {"width":160,"height":160};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVG25SNwe2L"><stop offset="0"/><stop offset="1" class="vc--wpv5i"/></linearGradient><linearGradient id="SVG1NfqLehx" x1="-553.27" x2="-666.12" y1="525.91" y2="413.05" gradientTransform="matrix(.99884 0 0 .9987 689.01 -388.84)" gradientUnits="userSpaceOnUse" href="#SVG25SNwe2L"/><linearGradient id="SVGzODnDdme" x1="-666.12" x2="-553.27" y1="413.04" y2="525.91" gradientTransform="matrix(.99884 0 0 .9987 689.01 -388.84)" gradientUnits="userSpaceOnUse" href="#SVG25SNwe2L"/></defs><g class="u_tgcnb_i"><path fill="url(#SVGzODnDdme)" class="ozfj1otnl"/><path fill="url(#SVG1NfqLehx)" class="wqjspob6s"/></g>`,
		"fallback": "thesvg-color:json",
	});
}

export default Component;
