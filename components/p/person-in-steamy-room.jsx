import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i6w2__w5x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i6w2__w5x"/>`,
		"fallback": "fluent-emoji-high-contrast:person-in-steamy-room",
	});
}

export default Component;
