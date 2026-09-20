import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi68c0nhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oi68c0nhc"/>`,
		"fallback": "reicon:lock-password-filled",
	});
}

export default Component;
