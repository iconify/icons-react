import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5-lecc5z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5-lecc5z"/>`,
		"fallback": "game-icons:punch-blast",
	});
}

export default Component;
