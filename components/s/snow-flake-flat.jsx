import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x30kqj6eu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x30kqj6eu"/>`,
		"fallback": "streamline-color:snow-flake-flat",
	});
}

export default Component;
