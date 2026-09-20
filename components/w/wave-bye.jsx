import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q7dlckbgs.css';
import '../../css/e/e2mgq8bro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q7dlckbgs"/><path class="e2mgq8bro"/></g>`,
		"fallback": "tdesign:wave-bye",
	});
}

export default Component;
