import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fvfectegd.css';
import '../../css/y/y2tz9o_fn.css';
import '../../css/w/wweiqp_0g.css';
import '../../css/g/gh_4loaot.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fvfectegd"/><path class="y2tz9o_fn"/><path class="wweiqp_0g"/><path class="gh_4loaot"/></g>`,
		"fallback": "streamline-kameleon-color:script-paper-duo",
	});
}

export default Component;
