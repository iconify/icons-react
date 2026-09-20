import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/m5_qrrbwf.css';
import '../../css/d/dzsv_bjnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="m5_qrrbwf"/><path class="dzsv_bjnw"/></g>`,
		"fallback": "keyline-icons:sliders-horizontal-sharp-two-tone",
	});
}

export default Component;
