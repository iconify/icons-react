import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9rw-n5ub.css';
import '../../css/n/nyre3sbly.css';
import '../../css/k/kzevrep2n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9rw-n5ub"/><path class="nyre3sbly"/><path class="kzevrep2n"/>`,
		"fallback": "energy-icons:settlement-48-bold",
	});
}

export default Component;
