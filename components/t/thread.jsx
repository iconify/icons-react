import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzw2g-byx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzw2g-byx"/>`,
		"fallback": "fluent-emoji-high-contrast:thread",
	});
}

export default Component;
