import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_rd8mbkk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_rd8mbkk"/>`,
		"fallback": "game-icons:venus-flytrap",
	});
}

export default Component;
