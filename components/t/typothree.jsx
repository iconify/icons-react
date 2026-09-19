import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjcqj7bnr.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjcqj7bnr"/>`,
		"fallback": "whh:typothree",
	});
}

export default Component;
