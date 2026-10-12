import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx2q_i-0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nx2q_i-0i"/>`,
		"fallback": "andrsrxn:sort-a-z",
	});
}

export default Component;
