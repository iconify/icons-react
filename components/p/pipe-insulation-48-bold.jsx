import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0bb00b5y.css';
import '../../css/q/q5bh6acin.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0bb00b5y"/><path class="q5bh6acin"/>`,
		"fallback": "energy-icons:pipe-insulation-48-bold",
	});
}

export default Component;
