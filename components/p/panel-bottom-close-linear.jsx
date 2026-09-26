import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j3-aduokd.css';
import '../../css/b/b2vvr6bvh.css';
import '../../css/n/n9h5_9byn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j3-aduokd"/><path class="b2vvr6bvh"/><path class="n9h5_9byn"/></g>`,
		"fallback": "solar:panel-bottom-close-linear",
	});
}

export default Component;
