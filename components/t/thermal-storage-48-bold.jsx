import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9eadlwgv.css';
import '../../css/q/q_m60h3vf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9eadlwgv"/><path class="q_m60h3vf"/>`,
		"fallback": "energy-icons:thermal-storage-48-bold",
	});
}

export default Component;
