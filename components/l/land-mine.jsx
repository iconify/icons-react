import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec_g-0b5b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec_g-0b5b"/>`,
		"fallback": "game-icons:land-mine",
	});
}

export default Component;
