import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai0m27bgu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai0m27bgu"/>`,
		"fallback": "game-icons:subway-train",
	});
}

export default Component;
