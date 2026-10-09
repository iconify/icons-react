import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyfntu4cb.css';
import '../../css/r/ryn9fxb8x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyfntu4cb"/><path class="ryn9fxb8x"/>`,
		"fallback": "energy-icons:send-horizontal-20",
	});
}

export default Component;
