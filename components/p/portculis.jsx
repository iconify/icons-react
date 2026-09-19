import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7f4k2dyz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7f4k2dyz"/>`,
		"fallback": "game-icons:portculis",
	});
}

export default Component;
