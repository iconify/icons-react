import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp7rqpw6o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sp7rqpw6o"/>`,
		"fallback": "carbon:rotate-clockwise-alt",
	});
}

export default Component;
