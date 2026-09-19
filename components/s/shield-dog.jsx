import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km78v5cyw.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km78v5cyw"/>`,
		"fallback": "fa7-solid:shield-dog",
	});
}

export default Component;
