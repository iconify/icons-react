import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlm5zeidu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlm5zeidu"/>`,
		"fallback": "mingcute:social-x-line",
	});
}

export default Component;
