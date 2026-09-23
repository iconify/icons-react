import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/zgwutpbmz.css';
import '../../css/q/qgagbobjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="zgwutpbmz"/><path class="qgagbobjo"/></g>`,
		"fallback": "keyline-icons:pen-sparkles-sharp",
	});
}

export default Component;
