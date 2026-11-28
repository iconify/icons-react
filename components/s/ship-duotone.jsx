import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ikehi_b9l.css';
import '../../css/o/o0u6fhb-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ikehi_b9l secondary"/><path class="o0u6fhb-f primary"/></g>`,
		"fallback": "iconaut:ship-duotone",
	});
}

export default Component;
