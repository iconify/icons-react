import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcm8mkbut.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcm8mkbut"/>`,
		"fallback": "game-icons:network-bars",
	});
}

export default Component;
