import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhd-y3l3p.css';
import '../../css/u/uconxdb5j.css';
import '../../css/k/kmsu02uqo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhd-y3l3p"/><path class="uconxdb5j"/><path class="kmsu02uqo"/>`,
		"fallback": "energy-icons:synchronous-condenser-48",
	});
}

export default Component;
