import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e88q4ab4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e88q4ab4s"/>`,
		"fallback": "reicon:shield-lock-filled",
	});
}

export default Component;
