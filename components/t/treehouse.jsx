import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp8_upbeg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cp8_upbeg"/>`,
		"fallback": "game-icons:treehouse",
	});
}

export default Component;
