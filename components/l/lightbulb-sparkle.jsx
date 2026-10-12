import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uh277m_ob.css';
import '../../css/k/k5urdq7-q.css';
import '../../css/i/iariqbc-u.css';
import '../../css/x/xtvv9kb3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="uh277m_ob"/><path class="k5urdq7-q"/><path class="iariqbc-u"/><path class="xtvv9kb3o"/></g>`,
		"fallback": "andrsrxn:lightbulb-sparkle",
	});
}

export default Component;
