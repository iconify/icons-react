import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lq9u-lbic.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lq9u-lbic"/>`,
		"fallback": "game-icons:tightrope",
	});
}

export default Component;
