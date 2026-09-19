import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nur936bqd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nur936bqd"/>`,
		"fallback": "game-icons:path-distance",
	});
}

export default Component;
