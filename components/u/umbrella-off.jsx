import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yt165s4ke.css';
import '../../css/b/bw5gewb3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yt165s4ke"/><path class="bw5gewb3k"/></g>`,
		"fallback": "hugeicons:umbrella-off",
	});
}

export default Component;
