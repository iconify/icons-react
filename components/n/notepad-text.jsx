import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uylg6bcvj.css';
import '../../css/f/fd6pd66bu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="uylg6bcvj"/><path class="fd6pd66bu wm-a"/></g>`,
		"fallback": "withicons:notepad-text",
	});
}

export default Component;
