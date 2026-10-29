import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/b9_wl1bge.css';
import '../../css/u/un2hhabcu.css';
import '../../css/i/i_ysa44lc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="b9_wl1bge"/><path class="un2hhabcu"/><path class="i_ysa44lc"/></g>`,
		"fallback": "withicons:shirt-sketch",
	});
}

export default Component;
