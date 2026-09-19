import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f88l0n6ul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f88l0n6ul"/>`,
		"fallback": "boxicons:shape-unite",
	});
}

export default Component;
