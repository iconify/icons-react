import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iua8clh6p.css';
import '../../css/n/n_-rgtsiv.css';
import '../../css/q/qbrfddcfq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iua8clh6p"/><path class="n_-rgtsiv"/><path class="qbrfddcfq"/>`,
		"fallback": "energy-icons:receipt-refund-20-bold",
	});
}

export default Component;
