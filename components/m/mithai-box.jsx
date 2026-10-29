import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wz48u0_ot.css';
import '../../css/e/eszh_ubmk.css';
import '../../css/y/y5yshqqba.css';
import '../../css/w/wasqyguql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-k wz48u0_ot"/><path class="eszh_ubmk wm-a"/><path class="y5yshqqba"/><path class="wasqyguql"/></g>`,
		"fallback": "withicons-bauhaus:mithai-box",
	});
}

export default Component;
