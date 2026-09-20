import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_mc30q-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_mc30q-u"/>`,
		"fallback": "keyline-icons:sparkle-fill",
	});
}

export default Component;
