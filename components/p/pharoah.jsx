import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og9s0rb3l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og9s0rb3l"/>`,
		"fallback": "game-icons:pharoah",
	});
}

export default Component;
