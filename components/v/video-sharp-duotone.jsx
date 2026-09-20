import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/cqmknwfil.css';
import '../../css/r/rtfp0_byy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="cqmknwfil"/><path clip-rule="evenodd" class="rtfp0_byy"/></g>`,
		"fallback": "keyline-icons:video-sharp-duotone",
	});
}

export default Component;
