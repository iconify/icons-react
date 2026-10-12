import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yg--icc_r.css';
import '../../css/k/k515fkbto.css';
import '../../css/k/k-_h2ybwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yg--icc_r"/><path class="k515fkbto"/><path class="k-_h2ybwb"/></g>`,
		"fallback": "lucide-extended:kayak-duotone",
	});
}

export default Component;
