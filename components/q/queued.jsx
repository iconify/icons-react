import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1nqv73bw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1nqv73bw"/>`,
		"fallback": "carbon:queued",
	});
}

export default Component;
