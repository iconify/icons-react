import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iqv2ypk4u.css';
import '../../css/i/i5tk_owkx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iqv2ypk4u"/><path class="i5tk_owkx"/></g>`,
		"fallback": "bi:person-vcard",
	});
}

export default Component;
