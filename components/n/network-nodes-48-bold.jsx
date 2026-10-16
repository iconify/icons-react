import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw7qwioap.css';
import '../../css/l/l3qc97r_z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw7qwioap"/><path class="l3qc97r_z"/>`,
		"fallback": "energy-icons:network-nodes-48-bold",
	});
}

export default Component;
