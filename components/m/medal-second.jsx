import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dm8kvpb3m.css';
import '../../css/j/jqvgzlthm.css';
import '../../css/f/fgwe0-9hv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dm8kvpb3m"/><path class="jqvgzlthm"/><path class="fgwe0-9hv"/></g>`,
		"fallback": "andrsrxn:medal-second",
	});
}

export default Component;
