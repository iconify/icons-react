import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zu04dgbjy.css';
import '../../css/v/vj9avtbxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zu04dgbjy"/><path class="vj9avtbxz"/></g>`,
		"fallback": "andrsrxn:vpn",
	});
}

export default Component;
