import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/satd7upkb.css';
import '../../css/w/wy2n5sbyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="satd7upkb"/><path class="wy2n5sbyh"/></g>`,
		"fallback": "proicons:tablet",
	});
}

export default Component;
