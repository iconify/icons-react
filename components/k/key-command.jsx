import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z4rz_ws1a.css';
import '../../css/f/fdnf4_htv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z4rz_ws1a"/><path class="fdnf4_htv"/></g>`,
		"fallback": "andrsrxn:key-command",
	});
}

export default Component;
