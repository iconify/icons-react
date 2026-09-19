import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/ca_npwbji.css';
import '../../css/e/esczvtb1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ca_npwbji"/><path class="esczvtb1k"/></g>`,
		"fallback": "hugeicons:magnet",
	});
}

export default Component;
