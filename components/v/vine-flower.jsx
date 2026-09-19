import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjjt68bkx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjjt68bkx"/>`,
		"fallback": "game-icons:vine-flower",
	});
}

export default Component;
