import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r8dpo3oec.css';
import '../../css/f/fm9f4jbhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r8dpo3oec"/><path class="fm9f4jbhe"/></g>`,
		"fallback": "andrsrxn:ruler",
	});
}

export default Component;
