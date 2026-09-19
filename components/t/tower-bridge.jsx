import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrx28bc2j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrx28bc2j"/>`,
		"fallback": "game-icons:tower-bridge",
	});
}

export default Component;
