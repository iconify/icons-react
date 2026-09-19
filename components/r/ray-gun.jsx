import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s32_lyyvf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s32_lyyvf"/>`,
		"fallback": "game-icons:ray-gun",
	});
}

export default Component;
