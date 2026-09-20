import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xbt7j3fql.css';
import '../../css/y/y7ej-qbon.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="xbt7j3fql"/><path class="y7ej-qbon"/></g>`,
		"fallback": "skill-icons:javascript",
	});
}

export default Component;
