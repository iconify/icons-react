import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/drxk66foz.css';
import '../../css/t/toaaljiww.css';
import '../../css/v/v2ukonb-w.css';
import '../../css/p/ppgi3vj8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="drxk66foz wm-k"/><path class="toaaljiww wm-shadow"/><path class="v2ukonb-w wm-k"/><path class="ppgi3vj8t wm-a"/></g>`,
		"fallback": "withicons:map-pin-engrave",
	});
}

export default Component;
