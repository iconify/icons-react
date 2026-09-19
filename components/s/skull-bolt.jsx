import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdtepbbyx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdtepbbyx"/>`,
		"fallback": "game-icons:skull-bolt",
	});
}

export default Component;
