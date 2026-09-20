import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-ikn616o.css';
import '../../css/u/u-oup0bmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y-ikn616o"/><path class="u-oup0bmg"/></g>`,
		"fallback": "si:mic-duotone",
	});
}

export default Component;
