import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dontj7bcu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dontj7bcu"/>`,
		"fallback": "game-icons:pierced-body",
	});
}

export default Component;
