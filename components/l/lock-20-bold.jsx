import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlaay_4cm.css';
import '../../css/f/f4g0gcbkr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlaay_4cm"/><path class="f4g0gcbkr"/>`,
		"fallback": "energy-icons:lock-20-bold",
	});
}

export default Component;
