import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/lpbvso84o.css';
import '../../css/l/lkq7fbn9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="lpbvso84o"/><path class="lkq7fbn9c"/></g>`,
		"fallback": "keyline-icons:receipt-sharp-duotone",
	});
}

export default Component;
