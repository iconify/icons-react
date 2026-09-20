import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihus6ub9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihus6ub9o"/>`,
		"fallback": "weui:qr-code-filled",
	});
}

export default Component;
