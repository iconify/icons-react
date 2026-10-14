import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm7uaeb1c.css';
import '../../css/t/tc3e2jyph.css';
import '../../css/l/l0ij5ccyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rm7uaeb1c"><path class="tc3e2jyph"/><path class="l0ij5ccyn"/></g>`,
		"fallback": "matita:pin",
	});
}

export default Component;
