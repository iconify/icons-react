import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz-w0hsyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz-w0hsyk"/>`,
		"fallback": "eva:minus-fill",
	});
}

export default Component;
