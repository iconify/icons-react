import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v-zj4qbyf.css';
import '../../css/g/gx4bnzbrp.css';
import '../../css/j/j1fvgp9vr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v-zj4qbyf"/><path class="gx4bnzbrp"/><path class="j1fvgp9vr"/></g>`,
		"fallback": "hugeicons:software-license",
	});
}

export default Component;
