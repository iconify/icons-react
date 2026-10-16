import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsiiptbtu.css';
import '../../css/d/dm-cxkseg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsiiptbtu"/><path class="dm-cxkseg"/>`,
		"fallback": "energy-icons:shopping-basket-48-bold",
	});
}

export default Component;
