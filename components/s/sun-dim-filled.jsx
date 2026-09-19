import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-vkei2jb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-vkei2jb"/>`,
		"fallback": "boxicons:sun-dim-filled",
	});
}

export default Component;
