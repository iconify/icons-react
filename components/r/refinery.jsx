import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkd6icb8v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkd6icb8v"/>`,
		"fallback": "game-icons:refinery",
	});
}

export default Component;
