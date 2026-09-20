import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/ehmp1dbtn.css';
import '../../css/d/dimpftb7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ehmp1dbtn"/><path class="dimpftb7w"/></g>`,
		"fallback": "keyline-icons:phone-outgoing-sharp-duotone",
	});
}

export default Component;
