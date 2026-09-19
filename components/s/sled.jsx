import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj26e4bjv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oj26e4bjv"/>`,
		"fallback": "fluent-emoji-high-contrast:sled",
	});
}

export default Component;
