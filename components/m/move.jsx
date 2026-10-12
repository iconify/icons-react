import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf4z36b1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lf4z36b1s"/>`,
		"fallback": "andrsrxn:move",
	});
}

export default Component;
