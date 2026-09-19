import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1l1qmjew.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1l1qmjew"/>`,
		"fallback": "fxemoji:leftthoughtbubble",
	});
}

export default Component;
