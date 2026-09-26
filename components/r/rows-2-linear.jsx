import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/weddopsmh.css';
import '../../css/b/b2vvr6bvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="weddopsmh"/><path class="b2vvr6bvh"/></g>`,
		"fallback": "solar:rows-2-linear",
	});
}

export default Component;
