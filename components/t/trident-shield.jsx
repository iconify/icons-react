import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm64734gg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm64734gg"/>`,
		"fallback": "game-icons:trident-shield",
	});
}

export default Component;
