import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df9m2wbeq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="df9m2wbeq"/>`,
		"fallback": "fluent-emoji-high-contrast:light-blue-heart",
	});
}

export default Component;
