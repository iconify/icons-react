import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/aq2e-nbuu.css';
import '../../css/b/bhi0ikx5y.css';
import '../../css/e/e7wls2wqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="aq2e-nbuu"/><path class="bhi0ikx5y"/><path class="e7wls2wqe"/></g>`,
		"fallback": "streamline-freehand-color:shopping-basket-rating",
	});
}

export default Component;
