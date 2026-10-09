import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qodg3fqvb.css';
import '../../css/o/o32ailbdq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qodg3fqvb"/><path class="o32ailbdq"/>`,
		"fallback": "energy-icons:umbrella-20-bold",
	});
}

export default Component;
