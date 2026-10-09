import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgv9v9bka.css';
import '../../css/t/t1k7qpc8v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgv9v9bka"/><path class="t1k7qpc8v"/>`,
		"fallback": "energy-icons:sort-desc-48-bold",
	});
}

export default Component;
