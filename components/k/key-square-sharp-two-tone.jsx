import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/y0z_wrb2k.css';
import '../../css/o/oyop0fbrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="y0z_wrb2k"/><path class="oyop0fbrw"/></g>`,
		"fallback": "keyline-icons:key-square-sharp-two-tone",
	});
}

export default Component;
