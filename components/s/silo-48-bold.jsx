import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pj89w9bur.css';
import '../../css/n/ndtj57bce.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pj89w9bur"/><path class="ndtj57bce"/>`,
		"fallback": "energy-icons:silo-48-bold",
	});
}

export default Component;
