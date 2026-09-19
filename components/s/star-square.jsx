import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/j/jt0acubme.css';
import '../../css/r/rydeqwb-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="jt0acubme"/><path class="rydeqwb-g"/></g>`,
		"fallback": "hugeicons:star-square",
	});
}

export default Component;
