import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_gqa5fij.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_gqa5fij"/>`,
		"fallback": "whh:lightningalt",
	});
}

export default Component;
