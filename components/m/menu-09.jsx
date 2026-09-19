import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0xf25b9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0xf25b9k"/>`,
		"fallback": "hugeicons:menu-09",
	});
}

export default Component;
