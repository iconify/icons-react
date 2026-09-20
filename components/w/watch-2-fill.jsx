import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rs8yrvbvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rs8yrvbvh"/>`,
		"fallback": "mingcute:watch-2-fill",
	});
}

export default Component;
