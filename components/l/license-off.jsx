import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yc2zkk_am.css';
import '../../css/f/folecpbly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yc2zkk_am"/><path class="folecpbly"/></g>`,
		"fallback": "andrsrxn:license-off",
	});
}

export default Component;
