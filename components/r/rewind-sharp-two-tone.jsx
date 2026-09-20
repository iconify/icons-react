import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/z82wjixvo.css';
import '../../css/r/rxcsbu8ge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="z82wjixvo"/><path class="rxcsbu8ge"/></g>`,
		"fallback": "keyline-icons:rewind-sharp-two-tone",
	});
}

export default Component;
