import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg928d-qd.css';
import '../../css/l/lqupblb0q.css';
import '../../css/v/vx_l23zwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg928d-qd"/><path class="lqupblb0q"/><path class="vx_l23zwl"/>`,
		"fallback": "solar:special-effects-bold-duotone",
	});
}

export default Component;
