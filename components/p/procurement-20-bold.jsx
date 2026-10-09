import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ix679zbux.css';
import '../../css/l/lh-bp5b_i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ix679zbux"/><path class="lh-bp5b_i"/>`,
		"fallback": "energy-icons:procurement-20-bold",
	});
}

export default Component;
