import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bg_e5np9f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bg_e5np9f"/>`,
		"fallback": "game-icons:star-gate",
	});
}

export default Component;
