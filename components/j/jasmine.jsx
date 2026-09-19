import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz7qn2b3q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz7qn2b3q"/>`,
		"fallback": "game-icons:jasmine",
	});
}

export default Component;
