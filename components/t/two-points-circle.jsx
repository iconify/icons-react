import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p9-zrkb4g.css';
import '../../css/r/r1kb9kdlh.css';
import '../../css/q/qxikaqwtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p9-zrkb4g"/><path class="r1kb9kdlh"/><path class="qxikaqwtb"/></g>`,
		"fallback": "iconoir:two-points-circle",
	});
}

export default Component;
