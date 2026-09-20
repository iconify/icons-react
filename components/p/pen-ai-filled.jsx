import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3s9o7byd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3s9o7byd"/>`,
		"fallback": "ix:pen-ai-filled",
	});
}

export default Component;
