import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uh277m_ob.css';
import '../../css/w/waobduxyp.css';
import '../../css/y/y05b7wucp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="uh277m_ob"/><path class="waobduxyp"/><path class="y05b7wucp"/></g>`,
		"fallback": "andrsrxn:lightbulb-off",
	});
}

export default Component;
