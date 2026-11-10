import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r67p6-b1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r67p6-b1d"/>`,
		"fallback": "andrsrxn:text-underline",
	});
}

export default Component;
