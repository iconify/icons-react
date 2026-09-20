import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/eloqc2btp.css';
import '../../css/j/jbky7xpdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="eloqc2btp"/><path class="jbky7xpdt"/></g>`,
		"fallback": "keyline-icons:map-pin-sharp-duotone",
	});
}

export default Component;
