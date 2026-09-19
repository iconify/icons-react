import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m574asbhw.css';
import '../../css/c/c86sgxy_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="m574asbhw"/><path class="c86sgxy_s"/></g>`,
		"fallback": "hugeicons:leaf-01",
	});
}

export default Component;
