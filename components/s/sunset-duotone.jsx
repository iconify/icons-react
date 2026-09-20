import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p-u2e6oea.css';
import '../../css/m/mi1u-9b_u.css';
import '../../css/q/qs3ey3exp.css';
import '../../css/q/qywvln1_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="p-u2e6oea"/><path class="mi1u-9b_u"/><path class="qs3ey3exp"/><path class="qywvln1_s"/></g>`,
		"fallback": "reicon:sunset-duotone",
	});
}

export default Component;
