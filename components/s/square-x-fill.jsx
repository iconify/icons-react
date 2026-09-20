import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hthlj0aha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hthlj0aha"/>`,
		"fallback": "keyline-icons:square-x-fill",
	});
}

export default Component;
