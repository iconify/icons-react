import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly5l7q92e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly5l7q92e"/>`,
		"fallback": "game-icons:metal-disc",
	});
}

export default Component;
