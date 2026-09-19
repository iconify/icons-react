import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/x/xvj31lbcb.css';
import '../../css/z/zvgglebga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="xvj31lbcb"/><path class="zvgglebga"/></g>`,
		"fallback": "hugeicons:token-square",
	});
}

export default Component;
