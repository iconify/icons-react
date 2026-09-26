import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kfn71cctn.css';
import '../../css/o/oi1-6yfdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kfn71cctn"/><path class="oi1-6yfdg"/></g>`,
		"fallback": "solar:square-dot-dashed-linear",
	});
}

export default Component;
