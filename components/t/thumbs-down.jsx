import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sf_pqvhgl.css';
import '../../css/f/fdzwh2bsk.css';
import '../../css/z/zg-559b4t.css';
import '../../css/l/lbmjdvbfh.css';
import '../../css/s/saarc_b6c.css';
import '../../css/c/c__4y5rmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="sf_pqvhgl wm-shadow"/><path class="fdzwh2bsk"/><path class="zg-559b4t"/><path class="lbmjdvbfh"/><path class="saarc_b6c"/><path class="c__4y5rmm"/></g>`,
		"fallback": "withicons-retro:thumbs-down",
	});
}

export default Component;
