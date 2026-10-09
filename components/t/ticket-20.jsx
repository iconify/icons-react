import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs9-ycc5u.css';
import '../../css/j/j9e98_wlr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs9-ycc5u"/><path class="j9e98_wlr"/>`,
		"fallback": "energy-icons:ticket-20",
	});
}

export default Component;
