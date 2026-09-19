import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oq0_q08xk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oq0_q08xk"/>`,
		"fallback": "game-icons:knight-banner",
	});
}

export default Component;
