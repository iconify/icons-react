import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p82xhrlbe.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p82xhrlbe"/>`,
		"fallback": "fa7-solid:surprise",
	});
}

export default Component;
