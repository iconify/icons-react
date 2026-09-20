import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q_tdekblf.css';
import '../../css/j/j1v80yxvb.css';
import '../../css/l/l34aygbwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="q_tdekblf"/><path class="j1v80yxvb"/><path class="l34aygbwb"/></g>`,
		"fallback": "streamline-freehand:saving-money-seedling",
	});
}

export default Component;
