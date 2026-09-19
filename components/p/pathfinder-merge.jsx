import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwi7jsb9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwi7jsb9o"/>`,
		"fallback": "hugeicons:pathfinder-merge",
	});
}

export default Component;
