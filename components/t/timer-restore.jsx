import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/avx3q2b9r.css';
import '../../css/i/i85l-9wiw.css';
import '../../css/j/j7wxu_0-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse class="avx3q2b9r"/><path class="i85l-9wiw"/><path class="j7wxu_0-w"/></g>`,
		"fallback": "andrsrxn:timer-restore",
	});
}

export default Component;
