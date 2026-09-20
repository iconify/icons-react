import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lw9t853oj.css';
import '../../css/d/d-p6ffz3j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lw9t853oj"/><path class="d-p6ffz3j"/></g>`,
		"fallback": "streamline-color:user-remove-subtract",
	});
}

export default Component;
