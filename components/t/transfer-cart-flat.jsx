import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/ltfqsqjkt.css';
import '../../css/d/dtuk-4b7n.css';
import '../../css/z/z9aamlbis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ltfqsqjkt"/><path class="dtuk-4b7n"/><path class="z9aamlbis"/></g>`,
		"fallback": "streamline-sharp-color:transfer-cart-flat",
	});
}

export default Component;
