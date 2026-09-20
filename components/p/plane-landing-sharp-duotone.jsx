import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/vpp_acbcz.css';
import '../../css/o/o8z14obsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="vpp_acbcz"/><path class="o8z14obsa"/></g>`,
		"fallback": "keyline-icons:plane-landing-sharp-duotone",
	});
}

export default Component;
