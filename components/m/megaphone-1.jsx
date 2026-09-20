import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-g22cfbb.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-g22cfbb"/>`,
		"fallback": "lineicons:megaphone-1",
	});
}

export default Component;
