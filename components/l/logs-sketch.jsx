import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j0w4zr14k.css';
import '../../css/x/xvpa14bqq.css';
import '../../css/x/xjvs9bc3d.css';
import '../../css/p/pt4ty0bsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="j0w4zr14k"/><path class="wm-a xvpa14bqq"/><path class="wm-k xjvs9bc3d"/><path class="pt4ty0bsr wm-a"/></g>`,
		"fallback": "withicons:logs-sketch",
	});
}

export default Component;
