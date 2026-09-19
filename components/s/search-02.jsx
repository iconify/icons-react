import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tiz1ypbvc.css';
import '../../css/t/t5krbfbjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tiz1ypbvc"/><path class="t5krbfbjc"/></g>`,
		"fallback": "hugeicons:search-02",
	});
}

export default Component;
