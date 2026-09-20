import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ytf64jtpw.css';
import '../../css/q/qk9zyvbov.css';
import '../../css/g/gu203r_cf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ytf64jtpw"/><path class="qk9zyvbov"/><path class="gu203r_cf"/></g>`,
		"fallback": "solar:round-transfer-diagonal-bold-duotone",
	});
}

export default Component;
