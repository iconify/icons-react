import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emz1kui1y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emz1kui1y"/>`,
		"fallback": "game-icons:shoulder-bag",
	});
}

export default Component;
