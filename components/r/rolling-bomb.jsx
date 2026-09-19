import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqlzryb9o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqlzryb9o"/>`,
		"fallback": "game-icons:rolling-bomb",
	});
}

export default Component;
