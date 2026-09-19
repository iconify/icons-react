import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lxpifw6tl.css';
import '../../css/j/jsjpbvb0w.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lxpifw6tl"/><path class="jsjpbvb0w"/></g>`,
		"fallback": "devicon:perl",
	});
}

export default Component;
