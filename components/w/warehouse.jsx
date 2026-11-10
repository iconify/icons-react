import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ayx4uqb6m.css';
import '../../css/m/m_wfmdr5o.css';
import '../../css/h/h8zhcubnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ayx4uqb6m"/><path class="m_wfmdr5o"/><path class="h8zhcubnk"/></g>`,
		"fallback": "andrsrxn:warehouse",
	});
}

export default Component;
