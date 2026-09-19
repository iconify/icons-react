import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q27t-gbcc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q27t-gbcc"/>`,
		"fallback": "game-icons:river",
	});
}

export default Component;
