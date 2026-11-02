import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/m/mi0_zib3g.css';
import '../../css/j/j1t6wloyd.css';
import '../../css/y/y99xy_i9j.css';
import '../../css/i/ig7sw-rzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="mi0_zib3g"/><path class="j1t6wloyd"/><path class="y99xy_i9j"/><path class="ig7sw-rzh"/></g>`,
		"fallback": "matita:prescription-2",
	});
}

export default Component;
