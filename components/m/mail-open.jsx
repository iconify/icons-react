import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/h4h4xjbnx.css';
import '../../css/x/x_s880ber.css';
import '../../css/d/dy345rbyh.css';
import '../../css/e/e5u3p5bbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="h4h4xjbnx wm-shadow"/><path class="x_s880ber"/><path class="dy345rbyh"/><path class="e5u3p5bbq"/></g>`,
		"fallback": "withicons-retro:mail-open",
	});
}

export default Component;
