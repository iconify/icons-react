import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxs16d34a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxs16d34a"/>`,
		"fallback": "fluent-emoji-high-contrast:teacup-without-handle",
	});
}

export default Component;
