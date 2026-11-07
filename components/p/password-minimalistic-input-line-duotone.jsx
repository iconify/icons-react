import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fyfy6w7oj.css';
import '../../css/o/om4lnzbpu.css';
import '../../css/n/nliya7x_y.css';
import '../../css/f/fkmuctbdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fyfy6w7oj"/><path class="om4lnzbpu"/><path class="nliya7x_y"/><path class="fkmuctbdy"/></g>`,
		"fallback": "solar:password-minimalistic-input-line-duotone",
	});
}

export default Component;
