import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mver5acni.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mver5acni"/>`,
		"fallback": "fluent-emoji-high-contrast:memo",
	});
}

export default Component;
