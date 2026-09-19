import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cot1lm0tc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cot1lm0tc"/>`,
		"fallback": "circum:mountain-1",
	});
}

export default Component;
