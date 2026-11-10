import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l3wra8brw.css';
import '../../css/v/vvtkmhbxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l3wra8brw"/><path class="vvtkmhbxg"/></g>`,
		"fallback": "andrsrxn:panel-right-filled",
	});
}

export default Component;
