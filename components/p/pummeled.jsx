import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm6t7ttvt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bm6t7ttvt"/>`,
		"fallback": "game-icons:pummeled",
	});
}

export default Component;
