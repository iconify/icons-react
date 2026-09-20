import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/obmqjxbjc.css';
import '../../css/t/tg_j_ib9l.css';
import '../../css/t/t715m_b9c.css';
import '../../css/v/v4t9-tzht.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="obmqjxbjc"/><path class="tg_j_ib9l"/><path class="t715m_b9c"/><path class="v4t9-tzht"/></g>`,
		"fallback": "streamline-color:recording-tape-bubble-circle",
	});
}

export default Component;
