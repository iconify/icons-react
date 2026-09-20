import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lqr12dkxf.css';
import '../../css/u/u0ognac_v.css';
import '../../css/g/g46-gz07d.css';
import '../../css/d/d_y_0lfcd.css';
import '../../css/s/srbmx6fzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lqr12dkxf"/><path class="u0ognac_v"/><path class="g46-gz07d"/><path class="d_y_0lfcd"/><path class="srbmx6fzm"/></g>`,
		"fallback": "solar:playlist-minimalistic-3-line-duotone",
	});
}

export default Component;
