import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wfgdb1hen.css';
import '../../css/d/duhq2zwwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wfgdb1hen"/><path class="duhq2zwwi"/></g>`,
		"fallback": "andrsrxn:signal-status-low",
	});
}

export default Component;
