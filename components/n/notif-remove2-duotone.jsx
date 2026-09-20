import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qxrq2o-ko.css';
import '../../css/c/cuzoaq-8e.css';
import '../../css/s/sn22_qbpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qxrq2o-ko"/><path clip-rule="evenodd" class="cuzoaq-8e"/><path class="sn22_qbpu"/></g>`,
		"fallback": "reicon:notif-remove2-duotone",
	});
}

export default Component;
