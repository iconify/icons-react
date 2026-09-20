import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/uz0j13afx.css';
import '../../css/c/c86tgzbdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="uz0j13afx"/><path class="c86tgzbdv"/></g>`,
		"fallback": "keyline-icons:mic-off-sharp-two-tone",
	});
}

export default Component;
