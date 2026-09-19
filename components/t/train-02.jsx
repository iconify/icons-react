import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y6wtijbxl.css';
import '../../css/b/bt30c2_zm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y6wtijbxl"/><path class="bt30c2_zm"/></g>`,
		"fallback": "hugeicons:train-02",
	});
}

export default Component;
