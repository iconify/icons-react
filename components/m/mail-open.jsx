import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hhins-b0e.css';
import '../../css/z/z8_faljoi.css';
import '../../css/p/pu5rhtbei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hhins-b0e"/><path class="z8_faljoi"/><path class="pu5rhtbei"/></g>`,
		"fallback": "andrsrxn:mail-open",
	});
}

export default Component;
