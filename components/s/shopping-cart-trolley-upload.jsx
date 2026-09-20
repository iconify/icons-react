import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g6k77kbns.css';
import '../../css/x/x-k3sknjq.css';
import '../../css/b/brqbnxbtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="g6k77kbns"/><path class="x-k3sknjq"/><path class="brqbnxbtn"/></g>`,
		"fallback": "streamline-freehand-color:shopping-cart-trolley-upload",
	});
}

export default Component;
