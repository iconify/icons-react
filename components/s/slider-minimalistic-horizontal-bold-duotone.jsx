import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tz734cc2s.css';
import '../../css/h/hzacpn_fv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="tz734cc2s"/><path class="hzacpn_fv"/></g>`,
		"fallback": "solar:slider-minimalistic-horizontal-bold-duotone",
	});
}

export default Component;
