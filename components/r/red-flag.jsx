import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_4lqccln.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_4lqccln"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:red-flag",
	});
}

export default Component;
