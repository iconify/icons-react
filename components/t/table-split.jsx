import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e956fmbep.css';
import '../../css/v/vlozbfn-n.css';
import '../../css/p/p_3y3detq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e956fmbep"/><path class="vlozbfn-n"/><path class="p_3y3detq"/></g>`,
		"fallback": "tdesign:table-split",
	});
}

export default Component;
