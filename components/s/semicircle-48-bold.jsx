import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k10y5ab2w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k10y5ab2w"/>`,
		"fallback": "energy-icons:semicircle-48-bold",
	});
}

export default Component;
