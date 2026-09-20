import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dqjlqhb9e.css';
import '../../css/b/bjgbq_xpr.css';
import '../../css/l/l_re82bxc.css';
import '../../css/t/tvvetq0ue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dqjlqhb9e"/><path class="bjgbq_xpr"/><path class="l_re82bxc"/><path class="tvvetq0ue"/></g>`,
		"fallback": "streamline-ultimate-color:style-one-pin-plane",
	});
}

export default Component;
