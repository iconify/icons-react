import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cex3mhxbq.css';
import '../../css/v/v_xbae9wh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cex3mhxbq"/><path class="v_xbae9wh"/></g>`,
		"fallback": "solar:panel-bottom-line-duotone",
	});
}

export default Component;
