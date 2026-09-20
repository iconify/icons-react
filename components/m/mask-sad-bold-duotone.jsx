import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ee0xus2am.css';
import '../../css/k/k3jbaw_4p.css';
import '../../css/h/hmg62ybyv.css';
import '../../css/v/ve1npkyfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ee0xus2am"/><path class="k3jbaw_4p"/><path class="hmg62ybyv"/><path class="ve1npkyfn"/></g>`,
		"fallback": "solar:mask-sad-bold-duotone",
	});
}

export default Component;
