import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz88j1tie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz88j1tie"/>`,
		"fallback": "mingcute:numbers-09-sort-ascending-line",
	});
}

export default Component;
