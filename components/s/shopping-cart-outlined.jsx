import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwk08dzyy.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwk08dzyy"/>`,
		"fallback": "ant-design:shopping-cart-outlined",
	});
}

export default Component;
