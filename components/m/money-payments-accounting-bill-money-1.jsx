import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1538reyr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1538reyr"/>`,
		"fallback": "streamline-pixel:money-payments-accounting-bill-money-1",
	});
}

export default Component;
