import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/kowg2rbfs.css';
import '../../css/v/v42ajowgs.css';
import '../../css/m/mfrqcfwxy.css';
import '../../css/r/r5syqubsc.css';
import '../../css/j/jwmjtobbn.css';
import '../../css/o/o3emm6zrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="kowg2rbfs wm-shadow"/><path class="v42ajowgs"/><path class="mfrqcfwxy"/><path class="r5syqubsc"/><path class="jwmjtobbn wm-shine"/><path class="o3emm6zrf wm-deco"/></g>`,
		"fallback": "withicons-sticker:pizza",
	});
}

export default Component;
