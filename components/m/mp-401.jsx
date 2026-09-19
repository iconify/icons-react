import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vuc6f8bph.css';
import '../../css/u/uxzkgjj2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vuc6f8bph"/><path class="uxzkgjj2z"/></g>`,
		"fallback": "hugeicons:mp-401",
	});
}

export default Component;
