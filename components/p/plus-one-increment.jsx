import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h2_88k4dz.css';
import '../../css/o/oy8gbbbuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h2_88k4dz"/><path class="oy8gbbbuj"/></g>`,
		"fallback": "streamline-ultimate:plus-one-increment",
	});
}

export default Component;
