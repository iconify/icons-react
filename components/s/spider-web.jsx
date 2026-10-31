import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/i5-20q0_t.css';
import '../../css/r/rdktr3xsg.css';
import '../../css/f/f61_c6nui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="i5-20q0_t wm-shadow"/><path class="rdktr3xsg wm-shadow"/><path class="f61_c6nui"/></g>`,
		"fallback": "withicons-brutal:spider-web",
	});
}

export default Component;
