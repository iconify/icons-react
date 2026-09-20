import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/rx6-hzmpb.css';
import '../../css/a/afoagpens.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="rx6-hzmpb"/><path class="afoagpens"/></g>`,
		"fallback": "keyline-icons:skip-forward-sharp-duotone",
	});
}

export default Component;
