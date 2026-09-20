import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mxk6w_5dk.css';
import '../../css/p/pxnlt0biz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mxk6w_5dk"/><path class="pxnlt0biz"/></g>`,
		"fallback": "reicon:mouse4",
	});
}

export default Component;
