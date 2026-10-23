import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap7n5ps2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ap7n5ps2n"/>`,
		"fallback": "andrsrxn:text-case-screaming",
	});
}

export default Component;
