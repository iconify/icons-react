import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtg_m-bgh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtg_m-bgh"/>`,
		"fallback": "game-icons:sewing-needle",
	});
}

export default Component;
