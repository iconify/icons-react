import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db2i7lbka.css';
import '../../css/p/p64m754zz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db2i7lbka"/><path class="p64m754zz"/>`,
		"fallback": "energy-icons:towels-48-bold",
	});
}

export default Component;
