import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi2tssbmq.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi2tssbmq"/>`,
		"fallback": "fa7-solid:republican",
	});
}

export default Component;
