import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksq4q7bdt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksq4q7bdt"/>`,
		"fallback": "carbon:letter-vv",
	});
}

export default Component;
