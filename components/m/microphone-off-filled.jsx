import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro9ew8b1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ro9ew8b1h"/>`,
		"fallback": "griddy-icons:microphone-off-filled",
	});
}

export default Component;
