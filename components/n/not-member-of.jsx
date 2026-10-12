import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwu1q-4-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwu1q-4-g"/>`,
		"fallback": "andrsrxn:not-member-of",
	});
}

export default Component;
