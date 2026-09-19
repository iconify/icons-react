import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j2ll6ybku.css';
import '../../css/m/mxz1u7bmv.css';
import '../../css/r/rvab3vb8p.css';
import '../../css/n/n0vnjtbdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="j2ll6ybku"/><path class="mxz1u7bmv"/><path class="rvab3vb8p"/><path class="n0vnjtbdr"/></g>`,
		"fallback": "covid:mutation-1",
	});
}

export default Component;
