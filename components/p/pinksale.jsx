import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbuxb_d_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbuxb_d_o"/>`,
		"fallback": "token:pinksale",
	});
}

export default Component;
