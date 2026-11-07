import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3dnrk_0v.css';
import '../../css/r/r3h-ltb-k.css';
import '../../css/t/t2or4horf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3dnrk_0v"/><path class="r3h-ltb-k"/><path class="t2or4horf"/>`,
		"fallback": "solar:lock-keyhole-bold-duotone",
	});
}

export default Component;
