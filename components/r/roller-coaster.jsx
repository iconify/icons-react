import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3k9iwbuz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3k9iwbuz"/>`,
		"fallback": "fluent-emoji-high-contrast:roller-coaster",
	});
}

export default Component;
