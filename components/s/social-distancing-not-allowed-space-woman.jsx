import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xm2tn7pjb.css';
import '../../css/m/m01no-w0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xm2tn7pjb"/><path class="m01no-w0p"/></g>`,
		"fallback": "covid:social-distancing-not-allowed-space-woman",
	});
}

export default Component;
