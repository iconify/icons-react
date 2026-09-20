import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbq-w5j8i.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbq-w5j8i"/>`,
		"fallback": "oi:media-step-forward",
	});
}

export default Component;
