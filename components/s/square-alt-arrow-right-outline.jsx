import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef7crqbjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ef7crqbjl"/>`,
		"fallback": "solar:square-alt-arrow-right-outline",
	});
}

export default Component;
