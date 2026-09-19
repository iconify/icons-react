import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyumgc4hx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyumgc4hx"/>`,
		"fallback": "fluent-emoji-high-contrast:trophy",
	});
}

export default Component;
