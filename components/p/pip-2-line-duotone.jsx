import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l4wh4cbih.css';
import '../../css/x/x9iznbbxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l4wh4cbih"/><path class="x9iznbbxr"/></g>`,
		"fallback": "solar:pip-2-line-duotone",
	});
}

export default Component;
