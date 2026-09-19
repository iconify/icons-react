import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqa3tkb1n.css';
import '../../css/t/t77t6gbxy.css';
import '../../css/g/ga300c6qn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="t77t6gbxy"/><path class="ga300c6qn"/></g>`,
		"fallback": "iconoir:long-arrow-left-up-solid",
	});
}

export default Component;
