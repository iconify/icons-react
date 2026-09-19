import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfpx3bbyg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfpx3bbyg"/>`,
		"fallback": "game-icons:spiky-field",
	});
}

export default Component;
