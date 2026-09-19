import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_ww-5bsm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_ww-5bsm"/>`,
		"fallback": "game-icons:previous-button",
	});
}

export default Component;
