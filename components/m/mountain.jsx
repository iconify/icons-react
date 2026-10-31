import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t6q0web2s.css';
import '../../css/s/seb0b41ob.css';
import '../../css/r/rbuuxbmhx.css';
import '../../css/g/gn8ms0bbq.css';
import '../../css/n/n89_s913t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="t6q0web2s wm-shadow"/><path class="seb0b41ob"/><path class="rbuuxbmhx"/><path class="gn8ms0bbq"/><path class="n89_s913t"/></g>`,
		"fallback": "withicons-retro:mountain",
	});
}

export default Component;
