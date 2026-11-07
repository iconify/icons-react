import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3dnrk_0v.css';
import '../../css/y/ywc-2eb7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3dnrk_0v"/><path class="ywc-2eb7c"/>`,
		"fallback": "solar:lock-bold-duotone",
	});
}

export default Component;
