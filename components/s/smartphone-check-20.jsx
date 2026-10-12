import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9mf9qlbg.css';
import '../../css/w/wj8c8qbtx.css';
import '../../css/q/qh3-d7bck.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9mf9qlbg"/><path class="wj8c8qbtx"/><path class="qh3-d7bck"/>`,
		"fallback": "energy-icons:smartphone-check-20",
	});
}

export default Component;
