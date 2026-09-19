import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dujkwibxv.css';
import '../../css/d/d6u9lfbjc.css';
import '../../css/s/s-udsktty.css';
import '../../css/v/v3zb8-6oo.css';
import '../../css/t/t4l4_0yne.css';
import '../../css/p/p472gi8dg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dujkwibxv"/><path class="d6u9lfbjc"/><path class="s-udsktty"/><path class="v3zb8-6oo"/><path class="t4l4_0yne"/><path class="p472gi8dg"/></g>`,
		"fallback": "hugeicons:quiz-03",
	});
}

export default Component;
