import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dm8kvpb3m.css';
import '../../css/l/l3n2nd7wm.css';
import '../../css/m/m4a7tfrle.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dm8kvpb3m"/><path class="l3n2nd7wm"/><path class="m4a7tfrle"/></g>`,
		"fallback": "andrsrxn:medal-first",
	});
}

export default Component;
