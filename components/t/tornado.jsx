import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnhs46brd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnhs46brd"/>`,
		"fallback": "game-icons:tornado",
	});
}

export default Component;
