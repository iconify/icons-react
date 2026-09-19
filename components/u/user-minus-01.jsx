import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nlnol9hhk.css';
import '../../css/z/zx2_eugjs.css';
import '../../css/e/e41hsswqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nlnol9hhk"/><circle class="zx2_eugjs"/><path class="e41hsswqv"/></g>`,
		"fallback": "hugeicons:user-minus-01",
	});
}

export default Component;
