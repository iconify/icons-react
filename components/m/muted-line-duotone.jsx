import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/eroyg1b8x.css';
import '../../css/l/lsfk5hbus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="eroyg1b8x"/><path class="lsfk5hbus"/></g>`,
		"fallback": "solar:muted-line-duotone",
	});
}

export default Component;
