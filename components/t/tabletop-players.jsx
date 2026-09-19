import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ag9qn8bfj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ag9qn8bfj"/>`,
		"fallback": "game-icons:tabletop-players",
	});
}

export default Component;
