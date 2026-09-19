import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mqs-w65-h.css';
import '../../css/o/o7m9e7b2j.css';
import '../../css/t/tldp9ccxd.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="mqs-w65-h"/><path class="o7m9e7b2j"/><path class="tldp9ccxd"/></g>`,
		"fallback": "flag:td-4x3",
	});
}

export default Component;
