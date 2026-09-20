import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plqf3fb1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plqf3fb1j"/>`,
		"fallback": "mdi:markdown-outline",
	});
}

export default Component;
