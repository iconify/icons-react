import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rjr2ofjtq.css';
import '../../css/p/p8fx5dp2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rjr2ofjtq"/><path class="p8fx5dp2k"/></g>`,
		"fallback": "hugeicons:rocking-chair",
	});
}

export default Component;
