import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b2vvr6bvh.css';
import '../../css/v/v_xbae9wh.css';
import '../../css/l/l_g5nnb8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b2vvr6bvh"/><path class="v_xbae9wh"/><path class="l_g5nnb8p"/></g>`,
		"fallback": "solar:panel-bottom-open-line-duotone",
	});
}

export default Component;
