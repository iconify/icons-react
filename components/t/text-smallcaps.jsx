import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj8vdh51z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lj8vdh51z"/>`,
		"fallback": "hugeicons:text-smallcaps",
	});
}

export default Component;
