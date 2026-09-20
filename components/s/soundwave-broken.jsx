import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jy2u6qbys.css';
import '../../css/f/fnbkcebnq.css';
import '../../css/m/mg_8iub9x.css';
import '../../css/p/pz2mgtkjp.css';
import '../../css/k/k2-30wbbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jy2u6qbys"/><path class="fnbkcebnq"/><path class="mg_8iub9x"/><path class="pz2mgtkjp"/><path class="k2-30wbbi"/></g>`,
		"fallback": "solar:soundwave-broken",
	});
}

export default Component;
