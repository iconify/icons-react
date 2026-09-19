import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vth92z2_e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vth92z2_e"/>`,
		"fallback": "game-icons:unlocking",
	});
}

export default Component;
