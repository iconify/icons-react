import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dqodkgbgf.css';
import '../../css/y/ysxtnmb6c.css';
import '../../css/i/im3r36nom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dqodkgbgf"/><path clip-rule="evenodd" class="ysxtnmb6c"/><path class="im3r36nom"/></g>`,
		"fallback": "andrsrxn:signal-status-low-filled",
	});
}

export default Component;
