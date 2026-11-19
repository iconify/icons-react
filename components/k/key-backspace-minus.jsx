import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aob17wb8a.css';
import '../../css/i/ie6jpdb_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aob17wb8a"/><path class="ie6jpdb_q"/></g>`,
		"fallback": "andrsrxn:key-backspace-minus",
	});
}

export default Component;
