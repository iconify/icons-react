import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kze1e9b0h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kze1e9b0h"/>`,
		"fallback": "garden:text-color-stroke-20",
	});
}

export default Component;
