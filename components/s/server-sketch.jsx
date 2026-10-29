import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sj419obqh.css';
import '../../css/z/zu23d_b1x.css';
import '../../css/g/g__p88bfn.css';
import '../../css/y/ys4jrrrwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="sj419obqh"/><path class="wm-a zu23d_b1x"/><path class="g__p88bfn wm-k"/><path class="wm-a ys4jrrrwc"/></g>`,
		"fallback": "withicons:server-sketch",
	});
}

export default Component;
