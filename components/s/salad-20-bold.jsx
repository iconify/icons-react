import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo9ktvqdk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo9ktvqdk"/>`,
		"fallback": "energy-icons:salad-20-bold",
	});
}

export default Component;
