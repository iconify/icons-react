import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdqml2b2q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdqml2b2q"/>`,
		"fallback": "game-icons:viking-helmet",
	});
}

export default Component;
