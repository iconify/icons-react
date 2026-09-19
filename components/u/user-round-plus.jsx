import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/egj1vee1s.css';
import '../../css/y/y6p374mum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="egj1vee1s"/><path class="y6p374mum"/></g>`,
		"fallback": "hugeicons:user-round-plus",
	});
}

export default Component;
