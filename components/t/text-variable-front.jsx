import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ena8s0kok.css';
import '../../css/p/pq5jkpu9i.css';
import '../../css/k/ka0qx0bfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ena8s0kok"/><path class="pq5jkpu9i"/><circle class="ka0qx0bfj"/></g>`,
		"fallback": "hugeicons:text-variable-front",
	});
}

export default Component;
