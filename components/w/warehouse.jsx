import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/ird2dkdlx.css';
import '../../css/u/ulzs4-baa.css';
import '../../css/u/ux1_c-b-p.css';
import '../../css/c/cjqswry8o.css';
import '../../css/a/abwioqdgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ird2dkdlx wm-shadow"/><path class="ulzs4-baa wm-shadow"/><path class="ux1_c-b-p"/><path class="cjqswry8o"/><path class="abwioqdgh"/></g>`,
		"fallback": "withicons-brutal:warehouse",
	});
}

export default Component;
