import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry77vccoe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ry77vccoe"/>`,
		"fallback": "fluent-emoji-high-contrast:office-building",
	});
}

export default Component;
