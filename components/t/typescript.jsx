import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bv9q1mbbz.css';
import '../../css/g/gwurl1l8b.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="bv9q1mbbz"/><path class="gwurl1l8b"/></g>`,
		"fallback": "skill-icons:typescript",
	});
}

export default Component;
