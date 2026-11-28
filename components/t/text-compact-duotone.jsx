import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv4hsxbru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary zv4hsxbru"/>`,
		"fallback": "iconaut:text-compact-duotone",
	});
}

export default Component;
