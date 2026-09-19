import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/addq5hbza.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="addq5hbza"/>`,
		"fallback": "fluent-emoji-high-contrast:small-blue-diamond",
	});
}

export default Component;
