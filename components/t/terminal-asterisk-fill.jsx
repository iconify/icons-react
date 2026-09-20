import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y41iq91ri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y41iq91ri"/>`,
		"fallback": "keyline-icons:terminal-asterisk-fill",
	});
}

export default Component;
