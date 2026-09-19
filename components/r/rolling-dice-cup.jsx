import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz9gp_bvm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz9gp_bvm"/>`,
		"fallback": "game-icons:rolling-dice-cup",
	});
}

export default Component;
