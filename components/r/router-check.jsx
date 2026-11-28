import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn7800ahu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rn7800ahu"/>`,
		"fallback": "noviair-light:router-check",
	});
}

export default Component;
