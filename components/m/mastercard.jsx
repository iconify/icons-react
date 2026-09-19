import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2ct9t3oj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2ct9t3oj"/>`,
		"fallback": "icons8:mastercard",
	});
}

export default Component;
