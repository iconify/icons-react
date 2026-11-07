import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h-brjibpa.css';
import '../../css/s/s-28vgayl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="h-brjibpa"/><path class="s-28vgayl"/></g>`,
		"fallback": "solar:panel-top-linear",
	});
}

export default Component;
