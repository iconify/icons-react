import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/y/y5vgbcb_s.css';
import '../../css/l/lzsse_b1d.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="y5vgbcb_s"/><path class="lzsse_b1d"/></g>`,
		"fallback": "flag:ng-4x3",
	});
}

export default Component;
