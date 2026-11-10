import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r0bao4e8u.css';
import '../../css/b/btdu8cbuq.css';
import '../../css/x/xvulmum9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="r0bao4e8u"/><path class="btdu8cbuq"/><path class="xvulmum9n"/></g>`,
		"fallback": "andrsrxn:sparkle-square",
	});
}

export default Component;
