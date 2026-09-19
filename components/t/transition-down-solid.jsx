import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqa3tkb1n.css';
import '../../css/c/cfb94c_oh.css';
import '../../css/j/jm1_ttvqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="cfb94c_oh"/><path class="jm1_ttvqu"/></g>`,
		"fallback": "iconoir:transition-down-solid",
	});
}

export default Component;
