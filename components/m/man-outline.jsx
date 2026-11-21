import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6vm1lw4k.css';
import '../../css/w/w-a0529lf.css';
import '../../css/v/vfdh2_b_f.css';
import '../../css/o/o0lqhvmmi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6vm1lw4k"/><path class="w-a0529lf"/><path class="vfdh2_b_f"/><circle class="o0lqhvmmi"/>`,
		"fallback": "ion:man-outline",
	});
}

export default Component;
