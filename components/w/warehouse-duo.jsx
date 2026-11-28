import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3of49b8y.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/eimxpcxbf.css';
import '../../css/k/kokokn3dg.css';
import '../../css/z/zs5u1v-qk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary x3of49b8y"/><g class="dt0cm9dhy primary"><path class="eimxpcxbf"/><path class="kokokn3dg"/><path class="zs5u1v-qk"/></g>`,
		"fallback": "iconaut:warehouse-duo",
	});
}

export default Component;
