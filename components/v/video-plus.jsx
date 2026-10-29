import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lc1-hobqk.css';
import '../../css/i/ic6g-5rno.css';
import '../../css/p/pfaupr37u.css';
import '../../css/s/sik9nkdak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="lc1-hobqk wm-k"/><path class="ic6g-5rno"/><path class="pfaupr37u"/><path class="sik9nkdak wm-s"/></g>`,
		"fallback": "withicons-bauhaus:video-plus",
	});
}

export default Component;
