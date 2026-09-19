import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyce9obdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyce9obdj"/>`,
		"fallback": "eva:question-mark-circle-fill",
	});
}

export default Component;
