import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xp1_75-6c.css';
import '../../css/k/ktmi-7bdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary xp1_75-6c"/><path class="ktmi-7bdp primary"/></g>`,
		"fallback": "iconaut:lotus-duotone",
	});
}

export default Component;
