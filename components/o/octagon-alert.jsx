import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/uiqmlpp4f.css';
import '../../css/c/c8vxj1btj.css';
import '../../css/r/rdmdjgw4c.css';
import '../../css/x/x624b5wlo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="uiqmlpp4f wm-shadow"/><path class="c8vxj1btj wm-shadow"/><path class="rdmdjgw4c"/><path class="x624b5wlo"/></g>`,
		"fallback": "withicons-brutal:octagon-alert",
	});
}

export default Component;
