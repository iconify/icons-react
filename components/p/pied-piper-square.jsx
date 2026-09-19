import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3cu2bbmq.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3cu2bbmq"/>`,
		"fallback": "fa7-brands:pied-piper-square",
	});
}

export default Component;
