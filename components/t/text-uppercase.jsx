import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mft06ikyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mft06ikyj"/>`,
		"fallback": "andrsrxn:text-uppercase",
	});
}

export default Component;
