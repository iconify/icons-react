import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9sybde8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e9sybde8j"/>`,
		"fallback": "reicon:thermometer-filled",
	});
}

export default Component;
