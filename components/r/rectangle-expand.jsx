import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l5ktyqe9h.css';
import '../../css/f/f8m-cqb9t.css';
import '../../css/k/kw1p4dccr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l5ktyqe9h"/><path clip-rule="evenodd" class="f8m-cqb9t"/><path class="kw1p4dccr"/></g>`,
		"fallback": "nrk:rectangle-expand",
	});
}

export default Component;
