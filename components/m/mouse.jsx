import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk-i8_1pm.css';

const viewBox = {"width":705,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xk-i8_1pm"/>`,
		"fallback": "whh:mouse",
	});
}

export default Component;
