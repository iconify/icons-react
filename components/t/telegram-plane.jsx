import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/libpo1h3c.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="libpo1h3c"/>`,
		"fallback": "fa7-brands:telegram-plane",
	});
}

export default Component;
