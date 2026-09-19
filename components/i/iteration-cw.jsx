import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lpqayccmk.css';
import '../../css/w/w-sskwbqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lpqayccmk"/><path class="w-sskwbqs"/></g>`,
		"fallback": "hugeicons:iteration-cw",
	});
}

export default Component;
