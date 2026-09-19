import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/av32gzy1v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="av32gzy1v"/>`,
		"fallback": "fluent-emoji-high-contrast:left-speech-bubble",
	});
}

export default Component;
