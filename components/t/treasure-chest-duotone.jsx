import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nhgmvlb-h.css';
import '../../css/o/o0aldac0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nhgmvlb-h secondary"/><path class="o0aldac0s primary"/></g>`,
		"fallback": "iconaut:treasure-chest-duotone",
	});
}

export default Component;
