import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a51i1igho.css';
import '../../css/e/edrl9_xwf.css';
import '../../css/w/wnapsbb4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a51i1igho"/><path class="edrl9_xwf"/><path class="wnapsbb4h"/></g>`,
		"fallback": "andrsrxn:truck-front",
	});
}

export default Component;
