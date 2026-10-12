import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/etlgx3wgr.css';
import '../../css/g/gzy7rji7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="etlgx3wgr"/><path class="gzy7rji7a"/></g>`,
		"fallback": "andrsrxn:pyramid",
	});
}

export default Component;
