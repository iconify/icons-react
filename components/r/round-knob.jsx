import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yazs0eb2l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yazs0eb2l"/>`,
		"fallback": "game-icons:round-knob",
	});
}

export default Component;
