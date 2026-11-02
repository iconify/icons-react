import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b167aabvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b167aabvh"/>`,
		"fallback": "mingcute:train-4-line",
	});
}

export default Component;
