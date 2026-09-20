import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qyls5gb_b.css';
import '../../css/x/xej79-bhm.css';
import '../../css/f/fju8uwbfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qyls5gb_b"/><path class="xej79-bhm"/><path class="fju8uwbfm"/></g>`,
		"fallback": "streamline-freehand-color:mobile-shopping-shop-basket",
	});
}

export default Component;
