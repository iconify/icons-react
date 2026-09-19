import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w74aju6pj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w74aju6pj"/>`,
		"fallback": "game-icons:spiked-tentacle",
	});
}

export default Component;
