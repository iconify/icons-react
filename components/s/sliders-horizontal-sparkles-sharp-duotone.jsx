import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/cdvt0cjgt.css';
import '../../css/r/r-7n0qcfw.css';
import '../../css/s/snibgdcaa.css';
import '../../css/s/skqfcdqhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="cdvt0cjgt"/><path class="r-7n0qcfw"/><path class="snibgdcaa"/><path class="skqfcdqhg"/></g>`,
		"fallback": "keyline-icons:sliders-horizontal-sparkles-sharp-duotone",
	});
}

export default Component;
