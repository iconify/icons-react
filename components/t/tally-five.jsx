import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udy-fib_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udy-fib_f"/>`,
		"fallback": "andrsrxn:tally-five",
	});
}

export default Component;
