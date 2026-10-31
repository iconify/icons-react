import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qhwip2b6c.css';
import '../../css/j/jfxx-nb1i.css';
import '../../css/f/fufcutb1f.css';
import '../../css/e/en4jeyb0b.css';
import '../../css/n/njnsq62ia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="qhwip2b6c wm-shadow"/><path class="jfxx-nb1i wm-shadow"/><path class="fufcutb1f"/><path class="en4jeyb0b"/><path class="njnsq62ia"/></g>`,
		"fallback": "withicons-brutal:mandarin-orange",
	});
}

export default Component;
