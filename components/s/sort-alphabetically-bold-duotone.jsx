import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a4_z5ubfr.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/s/s5ao597ql.css';
import '../../css/n/nsg7l2cph.css';
import '../../css/j/jd818u1tz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="a4_z5ubfr"/><g class="mc2zb0bvp"><path class="s5ao597ql"/><path class="nsg7l2cph"/><path class="jd818u1tz"/></g></g>`,
		"fallback": "solar:sort-alphabetically-bold-duotone",
	});
}

export default Component;
