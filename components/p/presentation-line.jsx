import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq3zkbbek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dq3zkbbek"/>`,
		"fallback": "majesticons:presentation-line",
	});
}

export default Component;
