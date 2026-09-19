import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a2okesgun.css';
import '../../css/m/mungiybmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="a2okesgun"/><path class="mungiybmz"/></g>`,
		"fallback": "hugeicons:list-collapse",
	});
}

export default Component;
