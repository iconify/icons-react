import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v55469oxs.css';
import '../../css/d/dzgjwcrbr.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="v55469oxs"/><path class="dzgjwcrbr"/></g>`,
		"fallback": "skill-icons:linkedin",
	});
}

export default Component;
