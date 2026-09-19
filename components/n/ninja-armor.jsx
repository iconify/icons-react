import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlj03gb1j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlj03gb1j"/>`,
		"fallback": "game-icons:ninja-armor",
	});
}

export default Component;
