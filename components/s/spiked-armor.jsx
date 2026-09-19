import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg_2tebxi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg_2tebxi"/>`,
		"fallback": "game-icons:spiked-armor",
	});
}

export default Component;
