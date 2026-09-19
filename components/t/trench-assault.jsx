import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0_8ic-wl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0_8ic-wl"/>`,
		"fallback": "game-icons:trench-assault",
	});
}

export default Component;
