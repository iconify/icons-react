import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rve5gm69h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rve5gm69h"/>`,
		"fallback": "andrsrxn:text-increase-size",
	});
}

export default Component;
