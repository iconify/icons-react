import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/s5k88bbyd.css';
import '../../css/o/ox2v0n22b.css';
import '../../css/b/bxp-4qb3o.css';
import '../../css/e/eycan2bvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="s5k88bbyd"/><path class="ox2v0n22b wm-s"/><path class="bxp-4qb3o"/><path class="eycan2bvo wm-a"/></g>`,
		"fallback": "withicons:ring-box-duo",
	});
}

export default Component;
