import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vt5rq6mfd.css';
import '../../css/r/rce5qmo1y.css';
import '../../css/k/kyu7tx1-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vt5rq6mfd"/><path class="rce5qmo1y"/><path class="kyu7tx1-w"/>`,
		"fallback": "solar:money-bag-bold-duotone",
	});
}

export default Component;
