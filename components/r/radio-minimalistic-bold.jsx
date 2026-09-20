import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gwt1w76vd.css';
import '../../css/o/otj28eb-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gwt1w76vd"/><path clip-rule="evenodd" class="otj28eb-g"/></g>`,
		"fallback": "solar:radio-minimalistic-bold",
	});
}

export default Component;
