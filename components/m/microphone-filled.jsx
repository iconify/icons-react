import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amefarb4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="amefarb4u"/>`,
		"fallback": "griddy-icons:microphone-filled",
	});
}

export default Component;
