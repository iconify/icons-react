import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zi4j5knsh.css';
import '../../css/j/j8-l1jbax.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zi4j5knsh"/><path class="j8-l1jbax"/></g>`,
		"fallback": "streamline-color:volume-off",
	});
}

export default Component;
