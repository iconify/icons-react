import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w1w87sbbh.css';
import '../../css/u/u50bmlwji.css';
import '../../css/u/u0z041bxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w1w87sbbh"/><path class="u50bmlwji"/><path class="u0z041bxe"/></g>`,
		"fallback": "lucide-extended:map-pin-pen-duotone",
	});
}

export default Component;
