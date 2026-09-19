import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b55h97b1w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b55h97b1w"/>`,
		"fallback": "game-icons:plesiosaurus",
	});
}

export default Component;
