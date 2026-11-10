import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wb1d-abyh.css';
import '../../css/a/ackmxgbgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wb1d-abyh"/><path class="ackmxgbgv"/></g>`,
		"fallback": "andrsrxn:panels-right-filled",
	});
}

export default Component;
