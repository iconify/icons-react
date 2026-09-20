import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/lbh94bg9m.css';
import '../../css/u/u8_twwy6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="lbh94bg9m"/><path class="u8_twwy6z"/></g>`,
		"fallback": "keyline-icons:smartphone-check-sharp-fill",
	});
}

export default Component;
