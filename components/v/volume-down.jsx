import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwfgu54tm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwfgu54tm"/>`,
		"fallback": "carbon:volume-down",
	});
}

export default Component;
