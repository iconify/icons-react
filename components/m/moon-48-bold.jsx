import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exve3kbpn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exve3kbpn"/>`,
		"fallback": "energy-icons:moon-48-bold",
	});
}

export default Component;
