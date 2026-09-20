import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wjg0lbqom.css';
import '../../css/u/uc-43ib_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wjg0lbqom"/><path class="uc-43ib_l"/></g>`,
		"fallback": "streamline-freehand-color:shopping-cart-trolley-full",
	});
}

export default Component;
