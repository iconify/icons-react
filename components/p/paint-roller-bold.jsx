import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r7bwjtgfs.css';
import '../../css/q/qzhswnbxk.css';
import '../../css/h/hkt1xxbem.css';
import '../../css/m/m7byn6b2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r7bwjtgfs"/><path class="qzhswnbxk"/><path class="hkt1xxbem"/><path class="m7byn6b2f"/></g>`,
		"fallback": "solar:paint-roller-bold",
	});
}

export default Component;
