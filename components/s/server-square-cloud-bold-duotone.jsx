import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/v/vwwgerqvv.css';
import '../../css/a/at8usj3hk.css';
import '../../css/d/dbb2vccjx.css';
import '../../css/a/ajt7g1bty.css';
import '../../css/j/jr37kjlyl.css';
import '../../css/d/ds5fribfr.css';
import '../../css/t/t5nh29bwk.css';
import '../../css/b/brhuxjbcp.css';
import '../../css/o/o6cckebsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="vwwgerqvv"/><path class="at8usj3hk"/></g><path class="dbb2vccjx"/><path class="ajt7g1bty"/><path class="jr37kjlyl"/><path class="ds5fribfr"/><path class="t5nh29bwk"/><path class="brhuxjbcp"/><path class="o6cckebsq"/></g>`,
		"fallback": "solar:server-square-cloud-bold-duotone",
	});
}

export default Component;
