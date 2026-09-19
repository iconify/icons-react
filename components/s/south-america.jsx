import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-gw35bmk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-gw35bmk"/>`,
		"fallback": "game-icons:south-america",
	});
}

export default Component;
