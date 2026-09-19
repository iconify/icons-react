import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja6d-8b0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ja6d-8b0m"/>`,
		"fallback": "boxicons:letter-spacing-alt-filled",
	});
}

export default Component;
