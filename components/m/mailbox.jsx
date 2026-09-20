import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohqzx-b_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohqzx-b_r"/>`,
		"fallback": "simple-icons:mailbox",
	});
}

export default Component;
