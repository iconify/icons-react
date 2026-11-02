import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9cj9y50u.css';
import '../../css/o/oy6hf0bjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9cj9y50u"/><path class="oy6hf0bjo"/>`,
		"fallback": "mingcute:loading-3-line",
	});
}

export default Component;
