import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/z/zn_b-0bsk.css';
import '../../css/e/ee3n-ybbc.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="zn_b-0bsk"/><path class="ee3n-ybbc"/></g>`,
		"fallback": "flag:mc-4x3",
	});
}

export default Component;
