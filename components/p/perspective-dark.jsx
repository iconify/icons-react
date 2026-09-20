import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/usngqit7o.css';
import '../../css/k/kyjj1r1_l.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="usngqit7o"/><path clip-rule="evenodd" class="kyjj1r1_l"/></g>`,
		"fallback": "thesvg-color:perspective-dark",
	});
}

export default Component;
