import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wdbvkhbpy.css';
import '../../css/x/x7ag86bpt.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/c/c-a4_nb-a.css';
import '../../css/q/q4fjqwbqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wdbvkhbpy wm-k"/><path class="wm-shadow x7ag86bpt"/><path class="wm-k yw4fz_b6b"/><path class="c-a4_nb-a wm-k"/><path class="q4fjqwbqj wm-a"/></g>`,
		"fallback": "withicons:lucky-coin-engrave",
	});
}

export default Component;
