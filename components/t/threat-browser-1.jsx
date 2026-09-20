import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fwcvvbb2h.css';
import '../../css/a/abfrbzbxy.css';
import '../../css/e/ewl_9bbbc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="fwcvvbb2h"/><path class="abfrbzbxy"/><path class="ewl_9bbbc"/></g>`,
		"fallback": "streamline:threat-browser-1",
	});
}

export default Component;
