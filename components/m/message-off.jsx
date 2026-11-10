import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b426d6bix.css';
import '../../css/r/r981l2b-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b426d6bix"/><path class="r981l2b-y"/></g>`,
		"fallback": "andrsrxn:message-off",
	});
}

export default Component;
