import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/ubo2nlb6e.css';
import '../../css/m/mwa5mqb6p.css';
import '../../css/y/yr2f_fpsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ubo2nlb6e"/><circle class="mwa5mqb6p"/><path class="yr2f_fpsb"/></g>`,
		"fallback": "hugeicons:user-unlock-01",
	});
}

export default Component;
