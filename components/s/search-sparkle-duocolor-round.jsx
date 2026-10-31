import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a1ycobbzm.css';
import '../../css/v/vy7vn8b1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a1ycobbzm"/><path class="vy7vn8b1q"/></g>`,
		"fallback": "coolicons:search-sparkle-duocolor-round",
	});
}

export default Component;
