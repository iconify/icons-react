import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj6zr-b_t.css';
import '../../css/z/zt2hc146k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nj6zr-b_t"/><path class="zt2hc146k"/>`,
		"fallback": "energy-icons:storage-heater-48-bold",
	});
}

export default Component;
