import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/agpbi222c.css';
import '../../css/y/yp72gybdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="agpbi222c"/><path class="yp72gybdi"/></g>`,
		"fallback": "solar:rewind-back-line-duotone",
	});
}

export default Component;
