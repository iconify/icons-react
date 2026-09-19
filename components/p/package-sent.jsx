import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dtia3z2sx.css';
import '../../css/m/mhedty8_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dtia3z2sx"/><path class="mhedty8_u"/></g>`,
		"fallback": "hugeicons:package-sent",
	});
}

export default Component;
