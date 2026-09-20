import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyk7o8xin.css';
import '../../css/j/j0z--qb6n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyk7o8xin"/><path class="j0z--qb6n"/>`,
		"fallback": "octicon:terminal-locked-16",
	});
}

export default Component;
