import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bqphnvzqd.css';
import '../../css/w/w3f2bfw-w.css';
import '../../css/b/bwmm-dbfo.css';
import '../../css/t/tsfppkblp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="bqphnvzqd"/><path class="w3f2bfw-w wm-a"/><path class="bwmm-dbfo wm-k"/><path class="tsfppkblp wm-a"/></g>`,
		"fallback": "withicons:mouse-sketch",
	});
}

export default Component;
