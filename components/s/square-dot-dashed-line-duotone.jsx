import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yb7rs8bok.css';
import '../../css/k/kfn71cctn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yb7rs8bok"/><path class="kfn71cctn"/></g>`,
		"fallback": "solar:square-dot-dashed-line-duotone",
	});
}

export default Component;
