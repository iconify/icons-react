import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/lbh94bg9m.css';
import '../../css/i/i0l307_8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="lbh94bg9m"/><path class="i0l307_8d"/></g>`,
		"fallback": "keyline-icons:smartphone-arrow-in-up-right-sharp-fill",
	});
}

export default Component;
