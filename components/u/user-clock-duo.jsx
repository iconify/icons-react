import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a_0c-vozs.css';
import '../../css/g/gpkr_o8bm.css';
import '../../css/o/oe4c91bbg.css';
import '../../css/v/vmhlk0o_i.css';
import '../../css/l/ljeitrr-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="a_0c-vozs"/><path class="gpkr_o8bm wm-s"/><path class="oe4c91bbg wm-s"/><path class="vmhlk0o_i wm-s"/><path class="ljeitrr-k"/></g>`,
		"fallback": "withicons:user-clock-duo",
	});
}

export default Component;
