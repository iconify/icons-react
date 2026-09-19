import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4zbtcbvy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4zbtcbvy"/>`,
		"fallback": "fluent-emoji-high-contrast:person-bald",
	});
}

export default Component;
