import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/r/r1zv4vbmm.css';
import '../../css/r/rsjsrjd2a.css';
import '../../css/l/lwa-rvbps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="r1zv4vbmm"/><path class="rsjsrjd2a"/><path class="lwa-rvbps"/></g>`,
		"fallback": "iconamoon:neutral-face-thin",
	});
}

export default Component;
