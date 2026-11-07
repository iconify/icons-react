import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2_p_-b2x.css';
import '../../css/p/po4rq5n8r.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/n/ns_onqv1v.css';
import '../../css/g/g-px437dg.css';
import '../../css/j/j0v4cub4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2_p_-b2x"/><path class="po4rq5n8r"/><g class="xtpeb-edw"><path class="ns_onqv1v"/><path class="g-px437dg"/><path class="j0v4cub4m"/></g>`,
		"fallback": "solar:playback-speed-bold-duotone",
	});
}

export default Component;
