import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/w/w4xt16bhc.css';
import '../../css/l/l3tkt12ja.css';
import '../../css/r/r_99_sgdv.css';
import '../../css/c/ck8h4nb_y.css';
import '../../css/t/tkuvc-5zm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><circle class="w4xt16bhc"/><path class="l3tkt12ja"/><path class="r_99_sgdv"/><circle class="ck8h4nb_y"/><path class="tkuvc-5zm"/></g>`,
		"fallback": "iconamoon:music-2",
	});
}

export default Component;
