import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enxp9bjeu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enxp9bjeu"/>`,
		"fallback": "game-icons:striking-arrows",
	});
}

export default Component;
