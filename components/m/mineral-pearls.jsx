import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln91y3bqv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln91y3bqv"/>`,
		"fallback": "game-icons:mineral-pearls",
	});
}

export default Component;
