import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c24zg0cgc.css';
import '../../css/n/n9h8i4b5h.css';
import '../../css/f/fk-oe3z5u.css';
import '../../css/l/l9luet0rh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c24zg0cgc"/><path class="n9h8i4b5h"/><path class="fk-oe3z5u"/><path class="l9luet0rh"/></g>`,
		"fallback": "streamline-flex-color:notification-application-1",
	});
}

export default Component;
