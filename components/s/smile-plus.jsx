import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bgfn-bl9e.css';
import '../../css/m/mf1gkmbwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bgfn-bl9e"/><path class="mf1gkmbwb"/></g>`,
		"fallback": "hugeicons:smile-plus",
	});
}

export default Component;
