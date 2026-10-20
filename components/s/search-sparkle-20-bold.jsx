import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnqzr1ypb.css';
import '../../css/j/jo6iw5bur.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnqzr1ypb"/><path class="jo6iw5bur"/>`,
		"fallback": "energy-icons:search-sparkle-20-bold",
	});
}

export default Component;
