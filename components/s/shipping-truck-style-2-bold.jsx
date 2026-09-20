import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_0qdieag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y_0qdieag"/>`,
		"fallback": "streamline-ultimate:shipping-truck-style-2-bold",
	});
}

export default Component;
