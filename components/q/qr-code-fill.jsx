import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rr-x4e2ju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rr-x4e2ju"/>`,
		"fallback": "ri:qr-code-fill",
	});
}

export default Component;
