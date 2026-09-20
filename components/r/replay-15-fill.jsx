import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/du1vo4boz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="du1vo4boz"/>`,
		"fallback": "ri:replay-15-fill",
	});
}

export default Component;
