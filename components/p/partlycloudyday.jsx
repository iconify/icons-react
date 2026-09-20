import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9h0xjb8f.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9h0xjb8f"/>`,
		"fallback": "wpf:partlycloudyday",
	});
}

export default Component;
