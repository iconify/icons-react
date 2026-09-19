import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ios_9nm3m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ios_9nm3m"/>`,
		"fallback": "fluent-emoji-high-contrast:lotus",
	});
}

export default Component;
