import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5-vjlrin.css';
import '../../css/o/ol2o_wbzo.css';
import '../../css/b/bd9gczbnq.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><mask id="SVGmBUHfe9Q"><path class="k5-vjlrin"/><path clip-rule="evenodd" class="ol2o_wbzo"/></mask></defs><circle mask="url(#SVGmBUHfe9Q)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pencil:moon-circle-filled",
	});
}

export default Component;
