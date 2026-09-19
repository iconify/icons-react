import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r76wqnblr.css';
import '../../css/n/n65-fcc0i.css';
import '../../css/f/fe_ylwb0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r76wqnblr"/><path class="n65-fcc0i"/><path class="fe_ylwb0l"/></g>`,
		"fallback": "hugeicons:pen-tool-add",
	});
}

export default Component;
