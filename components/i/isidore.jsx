import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf9l1q0nc.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf9l1q0nc"/>`,
		"fallback": "academicons:isidore",
	});
}

export default Component;
