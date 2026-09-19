import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es4p5rbdu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es4p5rbdu"/>`,
		"fallback": "game-icons:necklace",
	});
}

export default Component;
