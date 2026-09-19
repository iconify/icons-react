import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j55ox3b6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j55ox3b6s"/>`,
		"fallback": "boxicons:mountain-peak-filled",
	});
}

export default Component;
