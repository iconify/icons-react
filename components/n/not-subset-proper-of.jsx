import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dth8-2n2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dth8-2n2z"/>`,
		"fallback": "andrsrxn:not-subset-proper-of",
	});
}

export default Component;
