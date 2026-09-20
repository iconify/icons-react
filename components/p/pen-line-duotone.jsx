import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e598plirv.css';
import '../../css/a/acxk9dbev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e598plirv"/><path class="acxk9dbev"/></g>`,
		"fallback": "solar:pen-line-duotone",
	});
}

export default Component;
