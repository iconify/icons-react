import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlnmw483l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlnmw483l"/>`,
		"fallback": "game-icons:interlaced-tentacles",
	});
}

export default Component;
