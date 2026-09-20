import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v0dnq2b7o.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/g/gradl1bjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="v0dnq2b7o"/><circle class="h_tsn8bxt"/><circle class="gradl1bjs"/></g>`,
		"fallback": "solar:menu-dots-linear",
	});
}

export default Component;
