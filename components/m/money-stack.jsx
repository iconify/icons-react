import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khm5-lbaq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khm5-lbaq"/>`,
		"fallback": "game-icons:money-stack",
	});
}

export default Component;
