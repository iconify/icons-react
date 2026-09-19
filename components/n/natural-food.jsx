import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/x/x7x54wbvt.css';
import '../../css/q/qsiepsn6y.css';
import '../../css/j/jefvngbai.css';
import '../../css/f/fvjw0u_xf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="x7x54wbvt"/><path class="qsiepsn6y"/><path class="jefvngbai"/><path class="fvjw0u_xf"/></g>`,
		"fallback": "hugeicons:natural-food",
	});
}

export default Component;
