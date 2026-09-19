import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyxc17_eu.css';
import '../../css/f/fg7w486wz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gyxc17_eu"/><path class="fg7w486wz"/>`,
		"fallback": "basil:microphone-outline",
	});
}

export default Component;
