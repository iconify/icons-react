import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2n25kb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2n25kb0y"/>`,
		"fallback": "boxicons:message-heart-filled",
	});
}

export default Component;
