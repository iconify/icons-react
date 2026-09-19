import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j69z1bvmp.css';
import '../../css/m/m44gjsb5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j69z1bvmp"/><path class="m44gjsb5k"/></g>`,
		"fallback": "hugeicons:mortarboard-02",
	});
}

export default Component;
