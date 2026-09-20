import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dy5q6bchh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dy5q6bchh"/>`,
		"fallback": "solar:letter-bold",
	});
}

export default Component;
