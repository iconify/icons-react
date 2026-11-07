import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/glt3-e-dl.css';
import '../../css/a/atbdpsave.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="glt3-e-dl"/><path class="atbdpsave"/></g>`,
		"fallback": "solar:rolling-pin-line-duotone",
	});
}

export default Component;
