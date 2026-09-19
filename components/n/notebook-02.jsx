import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kbip3tbng.css';
import '../../css/m/mr88bhbde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kbip3tbng"/><path class="mr88bhbde"/></g>`,
		"fallback": "hugeicons:notebook-02",
	});
}

export default Component;
