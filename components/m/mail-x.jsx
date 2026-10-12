import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oticlybwu.css';
import '../../css/q/qq43uzbxm.css';
import '../../css/d/duih4jb0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oticlybwu"/><path class="qq43uzbxm"/><path class="duih4jb0l"/></g>`,
		"fallback": "andrsrxn:mail-x",
	});
}

export default Component;
