import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j5n9j3vfq.css';
import '../../css/t/trdem2e-g.css';
import '../../css/z/zrf-ivbpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j5n9j3vfq"/><path class="trdem2e-g"/><path class="zrf-ivbpw"/></g>`,
		"fallback": "reicon:square-arrows-down-duotone",
	});
}

export default Component;
