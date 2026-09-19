import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsbt4b50t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsbt4b50t"/>`,
		"fallback": "game-icons:time-dynamite",
	});
}

export default Component;
