import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4arvnpdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j4arvnpdg"/>`,
		"fallback": "streamline-ultimate:paper-sizes-a3-bold",
	});
}

export default Component;
