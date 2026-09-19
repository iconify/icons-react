import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa4crh6rn.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fa4crh6rn"/>`,
		"fallback": "fluent-mdl2:text-rotation",
	});
}

export default Component;
