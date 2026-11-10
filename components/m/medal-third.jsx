import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dm8kvpb3m.css';
import '../../css/p/pp24m1qke.css';
import '../../css/e/e0afkkbiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dm8kvpb3m"/><path class="pp24m1qke"/><path class="e0afkkbiw"/></g>`,
		"fallback": "andrsrxn:medal-third",
	});
}

export default Component;
