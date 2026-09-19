import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccyd1l15x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccyd1l15x"/>`,
		"fallback": "game-icons:kindle",
	});
}

export default Component;
