import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j93dpcc-p.css';
import '../../css/t/tw_o15b8j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j93dpcc-p"/><path class="tw_o15b8j"/>`,
		"fallback": "energy-icons:mail-unread-20-bold",
	});
}

export default Component;
