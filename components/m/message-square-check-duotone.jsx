import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z51z6b_cv.css';
import '../../css/i/iym-rnbyp.css';
import '../../css/r/re7_rlvjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z51z6b_cv"/><path class="iym-rnbyp"/><path class="re7_rlvjp"/></g>`,
		"fallback": "lucide-extended:message-square-check-duotone",
	});
}

export default Component;
