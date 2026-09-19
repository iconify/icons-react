import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqog2_b1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqog2_b1z"/>`,
		"fallback": "boxicons:mask-filled",
	});
}

export default Component;
