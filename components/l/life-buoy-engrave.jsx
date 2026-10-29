import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/s-enfpbrn.css';
import '../../css/c/clw7ejgyf.css';
import '../../css/t/tr2a1cr2g.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/y/yi23eea4c.css';
import '../../css/j/j13_cqbrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="s-enfpbrn wm-k"/><path class="clw7ejgyf wm-a"/><path class="tr2a1cr2g wm-shadow"/><path class="wm-k yw4fz_b6b"/><path class="wm-k yi23eea4c"/><path class="j13_cqbrn wm-a"/></g>`,
		"fallback": "withicons:life-buoy-engrave",
	});
}

export default Component;
