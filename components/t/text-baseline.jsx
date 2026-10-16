import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5b0uwb5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5b0uwb5r"/>`,
		"fallback": "andrsrxn:text-baseline",
	});
}

export default Component;
