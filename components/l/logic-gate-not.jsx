import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gniy5bk_g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gniy5bk_g"/>`,
		"fallback": "game-icons:logic-gate-not",
	});
}

export default Component;
