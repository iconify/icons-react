import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z3--b6-rm.css';
import '../../css/t/t1kh7rgif.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="z3--b6-rm"/><path class="t1kh7rgif"/></g>`,
		"fallback": "skill-icons:nginx",
	});
}

export default Component;
