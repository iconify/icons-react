import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5vym_8fp.css';
import '../../css/z/z3ml8sb3q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5vym_8fp"/><path class="z3ml8sb3q"/>`,
		"fallback": "energy-icons:shopping-basket-48",
	});
}

export default Component;
