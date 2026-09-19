import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/walnt8bov.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="walnt8bov"/>`,
		"fallback": "fluent-emoji-high-contrast:rugby-football",
	});
}

export default Component;
