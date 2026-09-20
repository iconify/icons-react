import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dke-r9hkj.css';
import '../../css/g/g4uydkbpi.css';
import '../../css/x/xl8j_acnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dke-r9hkj"/><path class="g4uydkbpi"/><path clip-rule="evenodd" class="xl8j_acnn"/></g>`,
		"fallback": "reicon:stars4-duotone",
	});
}

export default Component;
