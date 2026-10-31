import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jakbj5cau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jakbj5cau wm-k"/>`,
		"fallback": "withicons:jalebi-gloss",
	});
}

export default Component;
