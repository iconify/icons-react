import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn37jywxm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rn37jywxm"/>`,
		"fallback": "game-icons:torpedo",
	});
}

export default Component;
