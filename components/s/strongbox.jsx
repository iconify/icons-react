import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9n-v7-5u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9n-v7-5u"/>`,
		"fallback": "game-icons:strongbox",
	});
}

export default Component;
