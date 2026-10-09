import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8c1ilbfq.css';
import '../../css/q/qhwpupb8g.css';
import '../../css/j/jhg452mhl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8c1ilbfq"/><path class="qhwpupb8g"/><path class="jhg452mhl"/>`,
		"fallback": "energy-icons:lock-keyhole-48",
	});
}

export default Component;
