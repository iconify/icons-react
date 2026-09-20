import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/rfwktxufe.css';
import '../../css/q/qm8irt2ma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="rfwktxufe"/><path class="qm8irt2ma"/></g>`,
		"fallback": "keyline-icons:record-sharp-two-tone",
	});
}

export default Component;
