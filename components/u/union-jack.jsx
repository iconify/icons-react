import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ek-sb1riu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ek-sb1riu"/>`,
		"fallback": "game-icons:union-jack",
	});
}

export default Component;
