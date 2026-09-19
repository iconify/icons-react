import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_v7n7b_g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_v7n7b_g"/>`,
		"fallback": "game-icons:target-dummy",
	});
}

export default Component;
