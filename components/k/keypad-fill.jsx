import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni68l2f_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni68l2f_n"/>`,
		"fallback": "si:keypad-fill",
	});
}

export default Component;
