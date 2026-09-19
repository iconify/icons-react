import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sufngybmn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sufngybmn"/>`,
		"fallback": "fluent-emoji-high-contrast:plus",
	});
}

export default Component;
