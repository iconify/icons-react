import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-pfn5jar.css';
import '../../css/n/nben1wb6w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-pfn5jar"/><path class="nben1wb6w"/>`,
		"fallback": "energy-icons:search-48-bold",
	});
}

export default Component;
