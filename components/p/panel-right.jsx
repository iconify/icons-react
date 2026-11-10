import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ikw6g-btr.css';
import '../../css/v/vvtkmhbxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ikw6g-btr"/><path class="vvtkmhbxg"/></g>`,
		"fallback": "andrsrxn:panel-right",
	});
}

export default Component;
