import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yzkno5bug.css';
import '../../css/g/g1y745brb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="yzkno5bug"/><path class="g1y745brb"/></g>`,
		"fallback": "streamline-sharp:virtual-reality",
	});
}

export default Component;
