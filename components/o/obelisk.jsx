import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_8xjibxi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_8xjibxi"/>`,
		"fallback": "game-icons:obelisk",
	});
}

export default Component;
