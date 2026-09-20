import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/p6pu-dv5t.css';
import '../../css/d/dxsrwpial.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="p6pu-dv5t"/><path class="dxsrwpial"/></g>`,
		"fallback": "keyline-icons:volume-plus-sharp-duotone",
	});
}

export default Component;
