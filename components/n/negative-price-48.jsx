import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrjnvkbuz.css';
import '../../css/x/xqit6kboj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrjnvkbuz"/><path class="xqit6kboj"/>`,
		"fallback": "energy-icons:negative-price-48",
	});
}

export default Component;
