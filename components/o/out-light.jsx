import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bfx047nvg.css';
import '../../css/r/rwtlm9bjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bfx047nvg"/><path class="rwtlm9bjo"/></g>`,
		"fallback": "lets-icons:out-light",
	});
}

export default Component;
