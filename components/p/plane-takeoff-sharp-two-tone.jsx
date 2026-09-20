import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/kip225fpz.css';
import '../../css/g/g3-zcmbid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="kip225fpz"/><path class="g3-zcmbid"/></g>`,
		"fallback": "keyline-icons:plane-takeoff-sharp-two-tone",
	});
}

export default Component;
