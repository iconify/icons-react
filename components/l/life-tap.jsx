import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzvnz3url.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzvnz3url"/>`,
		"fallback": "game-icons:life-tap",
	});
}

export default Component;
