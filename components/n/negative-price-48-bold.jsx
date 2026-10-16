import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw5t0sbxt.css';
import '../../css/r/rkq55vbca.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw5t0sbxt"/><path class="rkq55vbca"/>`,
		"fallback": "energy-icons:negative-price-48-bold",
	});
}

export default Component;
