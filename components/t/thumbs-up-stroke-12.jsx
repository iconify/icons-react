import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/lofmxcb-i.css';
import '../../css/e/e-dxg-xyc.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="lofmxcb-i"/><rect class="e-dxg-xyc"/></g>`,
		"fallback": "garden:thumbs-up-stroke-12",
	});
}

export default Component;
