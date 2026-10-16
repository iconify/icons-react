import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxrct6bvh.css';
import '../../css/p/pkxeyyb6h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxrct6bvh"/><path class="pkxeyyb6h"/>`,
		"fallback": "energy-icons:refuse-truck-48-bold",
	});
}

export default Component;
