import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r1f_1jb5g.css';
import '../../css/f/f0zhtgbge.css';
import '../../css/b/bjn1hk75c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="r1f_1jb5g"/><path class="f0zhtgbge"/><path class="bjn1hk75c"/></g>`,
		"fallback": "andrsrxn:screencast",
	});
}

export default Component;
