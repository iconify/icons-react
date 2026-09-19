import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic-85ejwm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic-85ejwm"/>`,
		"fallback": "game-icons:spiked-tail",
	});
}

export default Component;
