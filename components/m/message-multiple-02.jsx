import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/n/nuct77bmt.css';
import '../../css/e/efm688bib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="nuct77bmt"/><path class="efm688bib"/></g>`,
		"fallback": "hugeicons:message-multiple-02",
	});
}

export default Component;
