import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6f34bfwl.css';
import '../../css/n/nud8t5e2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6f34bfwl"/><path clip-rule="evenodd" class="nud8t5e2d"/>`,
		"fallback": "basil:lock-outline",
	});
}

export default Component;
