import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2r-xbbti.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2r-xbbti"/>`,
		"fallback": "fluent-emoji-high-contrast:red-apple",
	});
}

export default Component;
