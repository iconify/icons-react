import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp5cnkbyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cp5cnkbyf"/>`,
		"fallback": "majesticons:underline-2-line",
	});
}

export default Component;
