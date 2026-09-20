import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jaz9c-b0o.css';
import '../../css/z/zj2nirlnt.css';
import '../../css/z/zwtdkobff.css';
import '../../css/b/bppk80h1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jaz9c-b0o"/><path class="zj2nirlnt"/><path class="zwtdkobff"/><path class="bppk80h1t"/></g>`,
		"fallback": "solar:shop-line-duotone",
	});
}

export default Component;
