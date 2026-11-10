import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dm8kvpb3m.css';
import '../../css/a/aw8nw8b_i.css';
import '../../css/b/bsuu_yb6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dm8kvpb3m"/><path class="aw8nw8b_i"/><path class="bsuu_yb6t"/></g>`,
		"fallback": "andrsrxn:medal-second",
	});
}

export default Component;
