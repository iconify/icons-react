import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxi-l1bjn.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxi-l1bjn"/>`,
		"fallback": "whh:octoloaderthree",
	});
}

export default Component;
