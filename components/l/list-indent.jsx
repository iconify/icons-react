import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9dkhru3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9dkhru3m"/>`,
		"fallback": "andrsrxn:list-indent",
	});
}

export default Component;
