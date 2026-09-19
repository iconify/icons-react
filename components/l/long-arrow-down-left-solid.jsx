import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqa3tkb1n.css';
import '../../css/t/ts89-04vk.css';
import '../../css/e/evd7-bb9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="ts89-04vk"/><path class="evd7-bb9v"/></g>`,
		"fallback": "iconoir:long-arrow-down-left-solid",
	});
}

export default Component;
