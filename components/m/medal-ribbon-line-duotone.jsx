import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/heii3gp1f.css';
import '../../css/e/ey97octmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="heii3gp1f"/><path class="ey97octmt"/></g>`,
		"fallback": "solar:medal-ribbon-line-duotone",
	});
}

export default Component;
