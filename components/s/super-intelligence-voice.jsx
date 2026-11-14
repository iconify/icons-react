import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm6wsvb4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bm6wsvb4i"/>`,
		"fallback": "hugeicons:super-intelligence-voice",
	});
}

export default Component;
