import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/n/n9_jv_ugp.css';
import '../../css/h/hnkf5ebrt.css';
import '../../css/z/zna1w6bmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="n9_jv_ugp"/><path class="hnkf5ebrt"/><path class="zna1w6bmi"/></g>`,
		"fallback": "keyline-icons:usb-drive-sharp-two-tone",
	});
}

export default Component;
