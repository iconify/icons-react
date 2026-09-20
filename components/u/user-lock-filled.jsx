import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcht8racb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jcht8racb"/>`,
		"fallback": "ix:user-lock-filled",
	});
}

export default Component;
