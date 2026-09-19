import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt_e7zb1l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rt_e7zb1l"/>`,
		"fallback": "codicon:paintcan",
	});
}

export default Component;
