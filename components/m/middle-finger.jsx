import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlest2i5e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlest2i5e"/>`,
		"fallback": "fluent-emoji-high-contrast:middle-finger",
	});
}

export default Component;
