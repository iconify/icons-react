import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/m/myaw-qbud.css';
import '../../css/n/nbr91v94u.css';
import '../../css/n/ns54r5bhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="myaw-qbud"/><path class="nbr91v94u"/><path class="ns54r5bhj"/></g>`,
		"fallback": "hugeicons:study-desk",
	});
}

export default Component;
