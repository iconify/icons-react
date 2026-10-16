import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk4s-jblr.css';
import '../../css/o/o2ddx5b5f.css';
import '../../css/j/jrnu5tbgw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk4s-jblr"/><path class="o2ddx5b5f"/><path class="jrnu5tbgw"/>`,
		"fallback": "energy-icons:receipt-refund-48-bold",
	});
}

export default Component;
