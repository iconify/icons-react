import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5ipcjk3w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5ipcjk3w"/>`,
		"fallback": "game-icons:lily-pads",
	});
}

export default Component;
