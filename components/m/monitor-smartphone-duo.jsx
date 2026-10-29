import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pra4pt0re.css';
import '../../css/e/exf_bbbgv.css';
import '../../css/w/w3r45wbbs.css';
import '../../css/e/e88n4oijh.css';
import '../../css/f/f-k5oeq-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="pra4pt0re"/><path class="exf_bbbgv wm-s"/><path class="w3r45wbbs wm-s"/><path class="e88n4oijh"/><path class="f-k5oeq-j wm-a"/></g>`,
		"fallback": "withicons:monitor-smartphone-duo",
	});
}

export default Component;
