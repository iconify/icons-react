import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kdck7fbvx.css';
import '../../css/i/iy_4hugoc.css';
import '../../css/v/v_9bj9eib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kdck7fbvx"/><path class="iy_4hugoc"/><path class="v_9bj9eib"/></g>`,
		"fallback": "lucide-extended:shield-half-duotone",
	});
}

export default Component;
