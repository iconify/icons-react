import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfw6i0twr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfw6i0twr"/>`,
		"fallback": "fluent-emoji-high-contrast:sunset",
	});
}

export default Component;
