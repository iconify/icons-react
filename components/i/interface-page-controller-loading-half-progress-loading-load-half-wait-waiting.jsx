import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tfum4pkvh.css';
import '../../css/y/y6_vy_bth.css';
import '../../css/j/j5fya0brq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="tfum4pkvh"/><path class="y6_vy_bth"/><path class="j5fya0brq"/></g>`,
		"fallback": "streamline:interface-page-controller-loading-half-progress-loading-load-half-wait-waiting",
	});
}

export default Component;
