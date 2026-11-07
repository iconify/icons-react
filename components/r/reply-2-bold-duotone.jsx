import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dp39eob_e.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/w/wb8cjb-ns.css';
import '../../css/g/gy2nyz5qi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dp39eob_e"/><g class="xtpeb-edw"><path class="wb8cjb-ns"/><path class="gy2nyz5qi"/></g>`,
		"fallback": "solar:reply-2-bold-duotone",
	});
}

export default Component;
