import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vevl8ac-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vevl8ac-q"/>`,
		"fallback": "iconamoon:sign-factorial-fill",
	});
}

export default Component;
