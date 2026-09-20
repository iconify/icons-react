import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h2sctea4w.css';
import '../../css/r/rq3rqabwk.css';
import '../../css/d/dpn1kvboj.css';
import '../../css/f/f_bnsfbeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="h2sctea4w"/><path class="rq3rqabwk"/><path class="dpn1kvboj"/><path class="f_bnsfbeh"/></g>`,
		"fallback": "solar:palette-round-bold-duotone",
	});
}

export default Component;
