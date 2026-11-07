import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/auu3x-bic.css';
import '../../css/o/odekisb3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="auu3x-bic"/><path class="odekisb3k"/></g>`,
		"fallback": "solar:pen-line-duotone",
	});
}

export default Component;
