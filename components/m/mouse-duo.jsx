import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zb344ebmv.css';
import '../../css/c/cz016_bve.css';
import '../../css/m/mm8lkn_5j.css';
import '../../css/t/tmjo8lbfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="zb344ebmv"/><path class="cz016_bve wm-a"/><path class="mm8lkn_5j"/><path class="tmjo8lbfp wm-a"/></g>`,
		"fallback": "withicons:mouse-duo",
	});
}

export default Component;
