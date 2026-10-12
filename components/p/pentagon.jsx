import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yidp1vsov.css';
import '../../css/p/pa4wr9bcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yidp1vsov"/><path class="pa4wr9bcu"/></g>`,
		"fallback": "andrsrxn:pentagon",
	});
}

export default Component;
