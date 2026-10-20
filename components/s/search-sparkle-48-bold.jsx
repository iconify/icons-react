import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-pfn5jar.css';
import '../../css/w/w81pxdb-o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-pfn5jar"/><path class="w81pxdb-o"/>`,
		"fallback": "energy-icons:search-sparkle-48-bold",
	});
}

export default Component;
