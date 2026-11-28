import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/r_y89cbyz.css';
import '../../css/z/z7sff1b_p.css';
import '../../css/s/s4yk83x2k.css';
import '../../css/x/x_yzv2u8n.css';
import '../../css/n/ntf_5z8_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="r_y89cbyz"/><path class="z7sff1b_p"/><path class="s4yk83x2k"/><path class="x_yzv2u8n"/><path class="ntf_5z8_w"/></g>`,
		"fallback": "iconaut:sunrise",
	});
}

export default Component;
