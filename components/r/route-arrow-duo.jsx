import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1m9nep6z.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/die20-bcf.css';
import '../../css/q/qqww5s1hy.css';
import '../../css/p/pd8vt0rck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1m9nep6z secondary"/><g class="dt0cm9dhy primary"><circle class="die20-bcf"/><path class="qqww5s1hy"/><path class="pd8vt0rck"/></g>`,
		"fallback": "iconaut:route-arrow-duo",
	});
}

export default Component;
