import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/deffmqb1k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="deffmqb1k"/>`,
		"fallback": "game-icons:opened-food-can",
	});
}

export default Component;
