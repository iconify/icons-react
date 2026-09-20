import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rd0lcccpu.css';
import '../../css/b/bhc8ep7-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rd0lcccpu"/><path class="bhc8ep7-r"/></g>`,
		"fallback": "nrk:mobile-check-expressive",
	});
}

export default Component;
