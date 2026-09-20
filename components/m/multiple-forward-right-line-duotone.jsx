import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dwxthcc5a.css';
import '../../css/o/oie_y4r_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dwxthcc5a"/><path class="oie_y4r_h"/></g>`,
		"fallback": "solar:multiple-forward-right-line-duotone",
	});
}

export default Component;
