import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/em3zn9a_e.css';
import '../../css/v/va9-l_xgz.css';
import '../../css/f/ffc9sli3v.css';
import '../../css/d/ddqtrn1yy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="em3zn9a_e"/><path class="va9-l_xgz"/><path class="ffc9sli3v"/><path class="ddqtrn1yy"/></g>`,
		"fallback": "keyline-icons:lightbulb-sparkles-sharp-two-tone",
	});
}

export default Component;
