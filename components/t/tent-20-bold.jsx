import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8gmoubzb.css';
import '../../css/o/oji4_ybzh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8gmoubzb"/><path class="oji4_ybzh"/>`,
		"fallback": "energy-icons:tent-20-bold",
	});
}

export default Component;
