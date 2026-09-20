import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x8rjv_buc.css';
import '../../css/t/tc-p6bfqy.css';
import '../../css/g/g7a9vub4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x8rjv_buc"/><path class="tc-p6bfqy"/><path class="g7a9vub4a"/></g>`,
		"fallback": "streamline-freehand-color:shopping-basket-like",
	});
}

export default Component;
