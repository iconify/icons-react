import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djy0icb9y.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/c4tsdsd3z.css';
import '../../css/o/o1ow3qbig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djy0icb9y secondary"/><g class="dt0cm9dhy primary"><path class="c4tsdsd3z"/><path class="o1ow3qbig"/></g>`,
		"fallback": "iconaut:picture-in-picture-duo",
	});
}

export default Component;
