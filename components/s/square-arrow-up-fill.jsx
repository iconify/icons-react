import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/os70hog4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="os70hog4e"/>`,
		"fallback": "mingcute:square-arrow-up-fill",
	});
}

export default Component;
