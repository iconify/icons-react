import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yj4kgvbfy.css';
import '../../css/t/trjdf1poy.css';
import '../../css/c/ctmr3ibhd.css';
import '../../css/x/x-p4m3puv.css';
import '../../css/s/szd75cbmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k yj4kgvbfy"/><path class="trjdf1poy wm-a"/><path class="ctmr3ibhd wm-shadow"/><path class="wm-k x-p4m3puv"/><path class="szd75cbmw wm-a"/></g>`,
		"fallback": "withicons:table-of-contents-engrave",
	});
}

export default Component;
