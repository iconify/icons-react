import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/a/alq2npp-y.css';
import '../../css/t/t0-bh1brh.css';
import '../../css/c/cxt6ycbzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="alq2npp-y"/><path class="t0-bh1brh"/><path class="cxt6ycbzn"/></g>`,
		"fallback": "reicon:star-rings",
	});
}

export default Component;
