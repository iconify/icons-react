import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vo63m3oqb.css';
import '../../css/r/r0tqvkbaf.css';
import '../../css/e/e1pgmrb2h.css';
import '../../css/b/bc6i-i1_q.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vo63m3oqb"/><path class="r0tqvkbaf"/><circle class="e1pgmrb2h"/><path class="bc6i-i1_q"/>`,
		"fallback": "openmoji:pepper",
	});
}

export default Component;
