import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/knwu_bb7f.css';
import '../../css/b/bb47etbbq.css';
import '../../css/p/px8mdm7ve.css';
import '../../css/l/l9lv5_bcf.css';
import '../../css/m/mvlqq2b6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="knwu_bb7f wm-k"/><path class="bb47etbbq wm-a"/><path class="px8mdm7ve wm-shadow"/><path class="l9lv5_bcf wm-k"/><path class="mvlqq2b6g wm-a"/></g>`,
		"fallback": "withicons:scan-engrave",
	});
}

export default Component;
