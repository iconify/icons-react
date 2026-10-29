import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/ajbqyxbct.css';
import '../../css/v/vt6-ivbtd.css';
import '../../css/y/y47r9-bnz.css';
import '../../css/v/vwp9wpqdw.css';
import '../../css/r/r1uvmmr9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ajbqyxbct wm-k"/><path class="vt6-ivbtd wm-a"/><path class="wm-shadow y47r9-bnz"/><path class="vwp9wpqdw wm-k"/><path class="r1uvmmr9d wm-a"/></g>`,
		"fallback": "withicons:undo-engrave",
	});
}

export default Component;
