import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk6mjkb0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pk6mjkb0r"/>`,
		"fallback": "griddy-icons:shield-off-filled",
	});
}

export default Component;
