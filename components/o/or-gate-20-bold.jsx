import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa3cy-byb.css';
import '../../css/e/e2lawp-2h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa3cy-byb"/><path class="e2lawp-2h"/>`,
		"fallback": "energy-icons:or-gate-20-bold",
	});
}

export default Component;
