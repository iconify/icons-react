import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-z2x7xqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-z2x7xqu"/>`,
		"fallback": "andrsrxn:sort-desc",
	});
}

export default Component;
