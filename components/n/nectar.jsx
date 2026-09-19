import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5lf-t0op.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5lf-t0op"/>`,
		"fallback": "game-icons:nectar",
	});
}

export default Component;
