import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtzcwg7gt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtzcwg7gt"/>`,
		"fallback": "mingcute:spacing-vertical-fill",
	});
}

export default Component;
