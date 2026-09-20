import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n1p3t8x8f.css';
import '../../css/q/q4nd00s6q.css';
import '../../css/q/qebsuebvl.css';
import '../../css/s/s6dbbpgpf.css';
import '../../css/m/mo7fv8bll.css';
import '../../css/e/el-ar7bpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="n1p3t8x8f"/><path class="q4nd00s6q"/><path class="qebsuebvl"/><path clip-rule="evenodd" class="s6dbbpgpf"/><path class="mo7fv8bll"/><path class="el-ar7bpg"/></g>`,
		"fallback": "solar:users-group-two-rounded-outline",
	});
}

export default Component;
