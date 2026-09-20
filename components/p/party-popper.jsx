import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w7m1bzi6s.css';
import '../../css/g/gno4q2bvr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w7m1bzi6s"/><path class="gno4q2bvr"/></g>`,
		"fallback": "streamline-color:party-popper",
	});
}

export default Component;
