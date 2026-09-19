import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx3is3rfw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tx3is3rfw"/>`,
		"fallback": "game-icons:magic-trident",
	});
}

export default Component;
