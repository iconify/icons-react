import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqa3tkb1n.css';
import '../../css/t/t6ktxkboh.css';
import '../../css/f/fag9bfbrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="t6ktxkboh"/><path class="fag9bfbrb"/></g>`,
		"fallback": "iconoir:long-arrow-up-right-solid",
	});
}

export default Component;
