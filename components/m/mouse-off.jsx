import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/trkobpb0u.css';
import '../../css/r/r4diknb8b.css';
import '../../css/c/cpashw62m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="trkobpb0u"/><path class="r4diknb8b"/><path class="cpashw62m"/></g>`,
		"fallback": "andrsrxn:mouse-off",
	});
}

export default Component;
