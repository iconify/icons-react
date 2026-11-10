import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q7wcc782q.css';
import '../../css/g/g4ih6-bxk.css';
import '../../css/b/bon66j0ts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q7wcc782q"/><path class="g4ih6-bxk"/><path class="bon66j0ts"/></g>`,
		"fallback": "andrsrxn:panel-bottom-open",
	});
}

export default Component;
