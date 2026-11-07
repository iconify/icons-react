import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6gx6-b_c.css';
import '../../css/f/f8mxy77tj.css';
import '../../css/u/u_isrfbff.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/i/ijnsdcb5f.css';
import '../../css/o/ot4vp_b2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6gx6-b_c"/><path clip-rule="evenodd" class="f8mxy77tj"/><path class="u_isrfbff"/><g class="xtpeb-edw"><path class="ijnsdcb5f"/><path class="ot4vp_b2c"/></g>`,
		"fallback": "solar:treadmill-round-bold-duotone",
	});
}

export default Component;
