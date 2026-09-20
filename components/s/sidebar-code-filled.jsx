import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpzp61zkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xpzp61zkz"/>`,
		"fallback": "reicon:sidebar-code-filled",
	});
}

export default Component;
