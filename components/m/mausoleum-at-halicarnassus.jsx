import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7aoxobjl.css';
import '../../css/e/e2_v2hb1h.css';
import '../../css/l/lggd7ul4e.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7aoxobjl"/><path class="e2_v2hb1h"/><path class="lggd7ul4e"/>`,
		"fallback": "openmoji:mausoleum-at-halicarnassus",
	});
}

export default Component;
