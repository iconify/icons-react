import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz12-ibde.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jz12-ibde"/>`,
		"fallback": "roentgen:vending-candles",
	});
}

export default Component;
