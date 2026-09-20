import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j-heh34pv.css';
import '../../css/c/cz-6xlbfk.css';
import '../../css/d/dvt7o1bcw.css';
import '../../css/l/l80i0rb1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j-heh34pv"/><path class="cz-6xlbfk"/><path class="dvt7o1bcw"/><path class="l80i0rb1m"/></g>`,
		"fallback": "solar:soundwave-circle-line-duotone",
	});
}

export default Component;
