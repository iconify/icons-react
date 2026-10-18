import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfkzhrk7n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfkzhrk7n"/>`,
		"fallback": "energy-icons:peak-shaving-20-bold",
	});
}

export default Component;
