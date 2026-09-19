import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/ix74hpb0f.css';
import '../../css/d/dicptfbfk.css';
import '../../css/x/xei8vkhxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ix74hpb0f"/><path class="dicptfbfk"/><path class="xei8vkhxk"/></g>`,
		"fallback": "hugeicons:notification-circle",
	});
}

export default Component;
