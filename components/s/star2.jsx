import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eylr1q3ho.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eylr1q3ho"/>`,
		"fallback": "raphael:star2",
	});
}

export default Component;
