import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxjqwnk_q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxjqwnk_q"/>`,
		"fallback": "garden:pin-stroke-20",
	});
}

export default Component;
