import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dhf6a5w_f.css';
import '../../css/v/v8hjbrbxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dhf6a5w_f"/><path class="v8hjbrbxw"/></g>`,
		"fallback": "hugeicons:video-off",
	});
}

export default Component;
