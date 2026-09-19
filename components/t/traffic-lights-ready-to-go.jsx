import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vidnqkb1b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vidnqkb1b"/>`,
		"fallback": "game-icons:traffic-lights-ready-to-go",
	});
}

export default Component;
