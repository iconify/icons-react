import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/m750iub0b.css';
import '../../css/n/nvt5opb_s.css';
import '../../css/x/xm_fkjuyf.css';
import '../../css/v/v4eygbcwz.css';
import '../../css/y/y91hq_wxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="m750iub0b wm-shadow"/><path class="nvt5opb_s"/><path class="xm_fkjuyf"/><path class="v4eygbcwz"/><path class="y91hq_wxq"/></g>`,
		"fallback": "withicons-retro:layout-template",
	});
}

export default Component;
