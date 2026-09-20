import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/e/e88a3ab2j.css';
import '../../css/y/ydjjx28jz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="e88a3ab2j"/><path class="ydjjx28jz"/></g>`,
		"fallback": "teenyicons:paypal-outline",
	});
}

export default Component;
