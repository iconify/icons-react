import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iszta5b5j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iszta5b5j"/>`,
		"fallback": "game-icons:movement-sensor",
	});
}

export default Component;
