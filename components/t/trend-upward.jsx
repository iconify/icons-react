import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-bfccc7i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-bfccc7i"/>`,
		"fallback": "ix:trend-upward",
	});
}

export default Component;
