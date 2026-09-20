import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bd1cxq6hl.css';
import '../../css/n/nnatxnbss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bd1cxq6hl"/><path class="nnatxnbss"/></g>`,
		"fallback": "tabler:shopping-bag-minus",
	});
}

export default Component;
