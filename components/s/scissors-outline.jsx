import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g27w5fl7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g27w5fl7q"/>`,
		"fallback": "solar:scissors-outline",
	});
}

export default Component;
