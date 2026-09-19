import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_k26acbn.css';
import '../../css/d/doncjo_7u.css';
import '../../css/y/y7f_1q1fr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_k26acbn"/><path class="doncjo_7u"/><rect class="y7f_1q1fr"/>`,
		"fallback": "circum:money-check-1",
	});
}

export default Component;
