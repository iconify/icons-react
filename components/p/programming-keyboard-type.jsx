import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pu33yvb-i.css';
import '../../css/g/g-oo9qbrr.css';
import '../../css/h/h9a9_1b9v.css';
import '../../css/y/ye-ibsbpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pu33yvb-i"/><path class="g-oo9qbrr"/><path class="h9a9_1b9v"/><path class="ye-ibsbpr"/></g>`,
		"fallback": "streamline-freehand-color:programming-keyboard-type",
	});
}

export default Component;
