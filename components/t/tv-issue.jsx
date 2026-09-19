import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/grgc8lbgv.css';
import '../../css/x/xt0fr7bdi.css';
import '../../css/k/k1fp4vtcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="grgc8lbgv"/><path class="xt0fr7bdi"/><path class="k1fp4vtcf"/></g>`,
		"fallback": "iconoir:tv-issue",
	});
}

export default Component;
