import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/myxdex6dx.css';
import '../../css/r/rn9lqlbkp.css';
import '../../css/m/mtkqh-b8x.css';
import '../../css/x/xedub3b-f.css';
import '../../css/z/zn_9l-v2f.css';
import '../../css/v/v0eyaibau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="myxdex6dx wm-shadow"/><path class="rn9lqlbkp"/><path class="mtkqh-b8x"/><path class="xedub3b-f"/><path class="zn_9l-v2f"/><path class="v0eyaibau wm-s"/></g>`,
		"fallback": "withicons-retro:server-off",
	});
}

export default Component;
