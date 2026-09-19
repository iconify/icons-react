import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpjtu2prx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpjtu2prx"/>`,
		"fallback": "game-icons:sprout-disc",
	});
}

export default Component;
