import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxjg9cssi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxjg9cssi"/>`,
		"fallback": "garden:puzzle-piece-stroke-20",
	});
}

export default Component;
