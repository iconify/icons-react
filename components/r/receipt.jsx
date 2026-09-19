import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/ds94pmb3e.css';
import '../../css/w/ww2v-3bfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ds94pmb3e"/><path class="ww2v-3bfe"/></g>`,
		"fallback": "hugeicons:receipt",
	});
}

export default Component;
