import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e0qz7_bcn.css';
import '../../css/v/vpdhrsb9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="e0qz7_bcn"/><path class="vpdhrsb9k"/></g>`,
		"fallback": "hugeicons:street-food",
	});
}

export default Component;
