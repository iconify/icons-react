import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/eloqc2btp.css';
import '../../css/m/m1ojwtb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="eloqc2btp"/><path class="m1ojwtb1i"/></g>`,
		"fallback": "keyline-icons:map-pin-heart-sharp-two-tone",
	});
}

export default Component;
