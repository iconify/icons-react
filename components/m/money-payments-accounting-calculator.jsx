import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c22bshnsy.css';
import '../../css/j/j0hahwblx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c22bshnsy"/><path class="j0hahwblx"/>`,
		"fallback": "streamline-pixel:money-payments-accounting-calculator",
	});
}

export default Component;
