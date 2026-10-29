import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/psw2b9bku.css';
import '../../css/y/ytuzbab7x.css';
import '../../css/c/cwccjv5ws.css';
import '../../css/w/wqahz7bph.css';
import '../../css/h/hrzastb6k.css';
import '../../css/n/nllv_bclw.css';
import '../../css/u/uwl3w5bbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="psw2b9bku wm-deco"/><path class="wm-deco ytuzbab7x"/><path class="cwccjv5ws wm-k"/><path class="wm-a wqahz7bph"/><path class="hrzastb6k wm-s"/><path class="nllv_bclw wm-s"/><path class="uwl3w5bbz wm-a"/></g>`,
		"fallback": "withicons:mosque-blueprint",
	});
}

export default Component;
