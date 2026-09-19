import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m93px3bkh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m93px3bkh"/>`,
		"fallback": "game-icons:skull-with-syringe",
	});
}

export default Component;
