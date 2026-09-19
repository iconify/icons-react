import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4mfo_b_o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4mfo_b_o"/>`,
		"fallback": "game-icons:water-mill",
	});
}

export default Component;
