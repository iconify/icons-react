import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p30l50b8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p30l50b8q"/>`,
		"fallback": "hugeicons:wardrobe-01",
	});
}

export default Component;
