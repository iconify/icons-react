import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3ox78bwd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3ox78bwd"/>`,
		"fallback": "la:torah",
	});
}

export default Component;
