import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xygct8bjn.css';
import '../../css/y/y-xxqpbcl.css';
import '../../css/x/xiby4z7mg.css';
import '../../css/g/g7m_9fb1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xygct8bjn"/><path class="y-xxqpbcl"/><path class="xiby4z7mg"/><path class="g7m_9fb1u"/></g>`,
		"fallback": "solar:password-minimalistic-bold-duotone",
	});
}

export default Component;
