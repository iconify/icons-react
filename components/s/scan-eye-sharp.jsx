import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/t8ne70b_m.css';
import '../../css/d/d-a_qsb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="t8ne70b_m"/><path class="d-a_qsb5c"/></g>`,
		"fallback": "keyline-icons:scan-eye-sharp",
	});
}

export default Component;
