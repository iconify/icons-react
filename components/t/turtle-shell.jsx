import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jruk4-ytp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jruk4-ytp"/>`,
		"fallback": "game-icons:turtle-shell",
	});
}

export default Component;
