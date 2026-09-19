import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osqgn_pjj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osqgn_pjj"/>`,
		"fallback": "game-icons:teapot-leaves",
	});
}

export default Component;
