import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xvavq2wyy.css';
import '../../css/i/iy5iz5l3t.css';
import '../../css/a/aua8iibsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xvavq2wyy"/><path class="iy5iz5l3t"/><path class="aua8iibsp"/></g>`,
		"fallback": "andrsrxn:layers-half",
	});
}

export default Component;
