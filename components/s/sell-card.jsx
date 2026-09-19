import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqa_9q7yj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqa_9q7yj"/>`,
		"fallback": "game-icons:sell-card",
	});
}

export default Component;
