import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vfap67bii.css';
import '../../css/d/djs1zgads.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vfap67bii"/><path class="djs1zgads"/></g>`,
		"fallback": "keyline-icons:tag-horizontal-start-sharp-duotone",
	});
}

export default Component;
