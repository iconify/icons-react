import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jja48fb-u.css';
import '../../css/e/e99x7cbrv.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="jja48fb-u"/><path class="e99x7cbrv"/></g>`,
		"fallback": "devicon:tmux",
	});
}

export default Component;
