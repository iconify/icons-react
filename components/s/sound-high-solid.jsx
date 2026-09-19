import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqa3tkb1n.css';
import '../../css/e/e-ta5acfb.css';
import '../../css/t/t5br0hi_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="e-ta5acfb"/><path class="t5br0hi_e"/></g>`,
		"fallback": "iconoir:sound-high-solid",
	});
}

export default Component;
