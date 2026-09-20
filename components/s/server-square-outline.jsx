import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-v3g4bxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e-v3g4bxu"/>`,
		"fallback": "solar:server-square-outline",
	});
}

export default Component;
