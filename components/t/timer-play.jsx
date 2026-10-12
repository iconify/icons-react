import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d3m_xbc-z.css';
import '../../css/h/hy-ik9szd.css';
import '../../css/o/ollo1vbxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="d3m_xbc-z"/><path class="hy-ik9szd"/><circle class="ollo1vbxs"/></g>`,
		"fallback": "andrsrxn:timer-play",
	});
}

export default Component;
