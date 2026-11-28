import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/psnw9hi6s.css';
import '../../css/i/i5ppcebvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="psnw9hi6s"/><path class="i5ppcebvc"/></g>`,
		"fallback": "iconaut:question-mark-duo",
	});
}

export default Component;
