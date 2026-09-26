import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f-rbj8yzp.css';
import '../../css/s/s-28vgayl.css';
import '../../css/l/lq4h_ux5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f-rbj8yzp"/><path class="s-28vgayl"/><path class="lq4h_ux5b"/></g>`,
		"fallback": "solar:panel-top-open-linear",
	});
}

export default Component;
