import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aq9vwpvuv.css';
import '../../css/m/mml9srb2o.css';
import '../../css/u/um_27sbup.css';
import '../../css/e/e_c-iubxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="aq9vwpvuv"/><path class="mml9srb2o"/><circle class="um_27sbup"/><path class="e_c-iubxf"/></g>`,
		"fallback": "solar:station-line-duotone",
	});
}

export default Component;
