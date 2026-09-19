import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b188s4buy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b188s4buy"/>`,
		"fallback": "game-icons:key-card",
	});
}

export default Component;
