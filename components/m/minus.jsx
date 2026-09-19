import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwnttcb1n.css';

const viewBox = {"width":758,"height":614};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xwnttcb1n"/>`,
		"fallback": "ls:minus",
	});
}

export default Component;
