import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0oq1yq9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0oq1yq9z"/>`,
		"fallback": "boxicons:send-filled",
	});
}

export default Component;
