import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e088kv27h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e088kv27h"/>`,
		"fallback": "token:paper",
	});
}

export default Component;
