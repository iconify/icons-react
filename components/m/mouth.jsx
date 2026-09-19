import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfsc4vbkf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfsc4vbkf"/>`,
		"fallback": "fluent-emoji-high-contrast:mouth",
	});
}

export default Component;
