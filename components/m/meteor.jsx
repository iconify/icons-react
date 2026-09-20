import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6p6n_5ao.css';
import '../../css/p/p38rt280q.css';
import '../../css/s/s_otqxiqv.css';
import '../../css/i/ixn0rmu0k.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/m/mmol2qgwz.css';
import '../../css/l/ljdtxlt7i.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6p6n_5ao"/><path class="p38rt280q"/><path class="s_otqxiqv"/><path class="ixn0rmu0k"/><g class="jn8qy4bru"><path class="mmol2qgwz"/><path class="ljdtxlt7i"/></g>`,
		"fallback": "openmoji:meteor",
	});
}

export default Component;
