import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_0fiya-d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_0fiya-d"/>`,
		"fallback": "game-icons:solar-time",
	});
}

export default Component;
