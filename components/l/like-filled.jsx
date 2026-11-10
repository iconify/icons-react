import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oqt6a9qpd.css';
import '../../css/z/z7zu30ban.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oqt6a9qpd"/><path class="z7zu30ban"/></g>`,
		"fallback": "andrsrxn:like-filled",
	});
}

export default Component;
