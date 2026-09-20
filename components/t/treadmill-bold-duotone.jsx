import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/etj7zqhmh.css';
import '../../css/q/qewjfjbei.css';
import '../../css/e/eqq32hr1t.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/o/o-a_llbzv.css';
import '../../css/u/uwjdfvbwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="etj7zqhmh"/><path clip-rule="evenodd" class="qewjfjbei"/><path class="eqq32hr1t"/><g class="mc2zb0bvp"><path class="o-a_llbzv"/><path class="uwjdfvbwa"/></g></g>`,
		"fallback": "solar:treadmill-bold-duotone",
	});
}

export default Component;
