import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bu0_3ub-f.css';
import '../../css/r/r2ec1367b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bu0_3ub-f"/><path class="r2ec1367b"/></g>`,
		"fallback": "solar:smart-speaker-2-line-duotone",
	});
}

export default Component;
