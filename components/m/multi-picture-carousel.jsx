import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/mard8acyx.css';
import '../../css/o/odyomth0s.css';
import '../../css/j/j_n05ckxv.css';
import '../../css/o/on_7nqkpl.css';
import '../../css/v/vqhy0sbgk.css';
import '../../css/h/h5u_f-2ef.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><rect class="mard8acyx"/><path class="odyomth0s"/><path class="j_n05ckxv"/><path class="on_7nqkpl"/><path class="vqhy0sbgk"/><path class="h5u_f-2ef"/></g>`,
		"fallback": "icon-park:multi-picture-carousel",
	});
}

export default Component;
