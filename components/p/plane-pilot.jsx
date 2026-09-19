import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iet_bbczh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iet_bbczh"/>`,
		"fallback": "game-icons:plane-pilot",
	});
}

export default Component;
