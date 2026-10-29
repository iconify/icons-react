import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/r36zoq12j.css';
import '../../css/b/bpzpxkbby.css';
import '../../css/b/b4svt7b_k.css';
import '../../css/s/slj835bqd.css';
import '../../css/y/yc_3dzbcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="r36zoq12j"/><path class="bpzpxkbby wm-a"/><path class="b4svt7b_k wm-s"/><path class="slj835bqd"/><path class="wm-a yc_3dzbcv"/></g>`,
		"fallback": "withicons:mosque-duo",
	});
}

export default Component;
