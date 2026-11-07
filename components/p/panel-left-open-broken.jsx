import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lr78om9_g.css';
import '../../css/m/ml0cb1b5h.css';
import '../../css/r/r1l_in_mz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lr78om9_g"/><path class="ml0cb1b5h"/><path class="r1l_in_mz"/></g>`,
		"fallback": "solar:panel-left-open-broken",
	});
}

export default Component;
