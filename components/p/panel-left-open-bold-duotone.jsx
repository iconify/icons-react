import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vhosbdcvu.css';
import '../../css/z/ze4ge3b2n.css';
import '../../css/o/o2nb3h_dq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vhosbdcvu"/><path class="ze4ge3b2n"/><path class="o2nb3h_dq"/></g>`,
		"fallback": "solar:panel-left-open-bold-duotone",
	});
}

export default Component;
