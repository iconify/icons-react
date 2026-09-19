import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz3o49b8v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz3o49b8v"/>`,
		"fallback": "fluent-emoji-high-contrast:thumbs-up",
	});
}

export default Component;
