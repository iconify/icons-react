import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfwc8-bcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfwc8-bcz"/>`,
		"fallback": "hugeicons:unfold-more",
	});
}

export default Component;
