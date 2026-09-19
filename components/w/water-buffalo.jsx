import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsp3xib-q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsp3xib-q"/>`,
		"fallback": "fluent-emoji-high-contrast:water-buffalo",
	});
}

export default Component;
