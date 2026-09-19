import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt_l_wkmq.css';
import '../../css/s/s_rh6-bjn.css';
import '../../css/r/rfmo84bve.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt_l_wkmq"/><path class="s_rh6-bjn"/><path class="rfmo84bve"/>`,
		"fallback": "fxemoji:stockchart",
	});
}

export default Component;
