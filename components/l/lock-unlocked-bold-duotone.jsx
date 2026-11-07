import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3dnrk_0v.css';
import '../../css/q/q8bptmxxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3dnrk_0v"/><path class="q8bptmxxx"/>`,
		"fallback": "solar:lock-unlocked-bold-duotone",
	});
}

export default Component;
