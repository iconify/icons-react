import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cxkdmhcui.css';
import '../../css/g/gj1e3t3wy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cxkdmhcui secondary"/><path class="gj1e3t3wy primary"/></g>`,
		"fallback": "iconaut:map-pin-sparkles-duotone",
	});
}

export default Component;
