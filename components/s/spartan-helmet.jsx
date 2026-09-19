import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r038yv9mh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r038yv9mh"/>`,
		"fallback": "game-icons:spartan-helmet",
	});
}

export default Component;
