import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/weqpodbxu.css';
import '../../css/s/sf2y53f_x.css';
import '../../css/k/k4j9aabpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="weqpodbxu"/><path class="sf2y53f_x"/><path class="k4j9aabpo"/></g>`,
		"fallback": "matita:percent",
	});
}

export default Component;
