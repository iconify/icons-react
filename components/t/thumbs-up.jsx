import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/j/jg3l880xk.css';
import '../../css/g/gr1gdh12t.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="jg3l880xk"/><path class="gr1gdh12t"/></g>`,
		"fallback": "system-uicons:thumbs-up",
	});
}

export default Component;
