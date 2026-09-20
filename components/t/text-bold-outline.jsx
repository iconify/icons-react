import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otrev-0be.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="otrev-0be"/>`,
		"fallback": "solar:text-bold-outline",
	});
}

export default Component;
