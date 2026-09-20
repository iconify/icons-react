import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/klx501brv.css';
import '../../css/q/qw3e2lbsa.css';
import '../../css/i/inc70qb-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="klx501brv"/><path class="qw3e2lbsa"/><path class="inc70qb-j"/></g>`,
		"fallback": "streamline-ultimate:style-two-pin-home",
	});
}

export default Component;
