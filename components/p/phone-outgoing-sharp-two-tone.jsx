import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/ehmp1dbtn.css';
import '../../css/v/vh5s1brbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ehmp1dbtn"/><path class="vh5s1brbd"/></g>`,
		"fallback": "keyline-icons:phone-outgoing-sharp-two-tone",
	});
}

export default Component;
