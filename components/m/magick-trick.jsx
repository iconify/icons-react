import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgsnhr3ag.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgsnhr3ag"/>`,
		"fallback": "game-icons:magick-trick",
	});
}

export default Component;
