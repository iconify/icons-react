import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv6bntf8m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv6bntf8m"/>`,
		"fallback": "fluent-emoji-high-contrast:spiral-shell",
	});
}

export default Component;
