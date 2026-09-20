import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npc39g6la.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npc39g6la"/>`,
		"fallback": "streamline-block:shopping-security",
	});
}

export default Component;
