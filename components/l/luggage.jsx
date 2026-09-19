import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnb388bsu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnb388bsu"/>`,
		"fallback": "fluent-emoji-high-contrast:luggage",
	});
}

export default Component;
