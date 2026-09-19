import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edyf7x0cz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edyf7x0cz"/>`,
		"fallback": "game-icons:mighty-force",
	});
}

export default Component;
