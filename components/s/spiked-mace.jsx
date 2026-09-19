import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hla5x_bzh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hla5x_bzh"/>`,
		"fallback": "game-icons:spiked-mace",
	});
}

export default Component;
