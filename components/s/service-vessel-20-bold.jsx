import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elry085fn.css';
import '../../css/d/duddw2vqv.css';
import '../../css/y/yc0e9lbqs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elry085fn"/><path class="duddw2vqv"/><path class="yc0e9lbqs"/>`,
		"fallback": "energy-icons:service-vessel-20-bold",
	});
}

export default Component;
