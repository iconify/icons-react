import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4p4-82my.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4p4-82my"/>`,
		"fallback": "game-icons:slap",
	});
}

export default Component;
