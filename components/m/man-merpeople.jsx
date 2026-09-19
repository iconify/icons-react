import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfa4yvn9o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfa4yvn9o"/>`,
		"fallback": "fluent-emoji-high-contrast:man-merpeople",
	});
}

export default Component;
