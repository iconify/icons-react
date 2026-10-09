import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyvso6b0h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qyvso6b0h"/>`,
		"fallback": "energy-icons:triangle-20",
	});
}

export default Component;
