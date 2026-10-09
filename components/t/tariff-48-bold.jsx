import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw5t0sbxt.css';
import '../../css/d/dvnt-eb0j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw5t0sbxt"/><path class="dvnt-eb0j"/>`,
		"fallback": "energy-icons:tariff-48-bold",
	});
}

export default Component;
