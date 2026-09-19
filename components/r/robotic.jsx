import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h9vmlxbqb.css';
import '../../css/r/r4f-rbb3p.css';
import '../../css/q/qbn5btbhs.css';
import '../../css/q/qd0cyf8vz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="h9vmlxbqb"/><path class="r4f-rbb3p"/><path class="qbn5btbhs"/><path class="qd0cyf8vz"/></g>`,
		"fallback": "hugeicons:robotic",
	});
}

export default Component;
