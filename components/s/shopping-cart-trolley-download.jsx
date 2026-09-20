import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/d64aytbpv.css';
import '../../css/r/rqxh9mzju.css';
import '../../css/u/ubjfz4bbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="d64aytbpv"/><path class="rqxh9mzju"/><path class="ubjfz4bbn"/></g>`,
		"fallback": "streamline-freehand-color:shopping-cart-trolley-download",
	});
}

export default Component;
