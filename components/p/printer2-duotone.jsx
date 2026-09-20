import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m0lg4ccxu.css';
import '../../css/m/mxbtkwbjt.css';
import '../../css/g/gilv6ob-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m0lg4ccxu"/><path class="mxbtkwbjt"/><path class="gilv6ob-v"/></g>`,
		"fallback": "reicon:printer2-duotone",
	});
}

export default Component;
