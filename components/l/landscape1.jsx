import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq7ij0btq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq7ij0btq"/>`,
		"fallback": "raphael:landscape1",
	});
}

export default Component;
