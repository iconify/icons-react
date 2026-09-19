import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0u_zpb2a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0u_zpb2a"/>`,
		"fallback": "game-icons:turret",
	});
}

export default Component;
