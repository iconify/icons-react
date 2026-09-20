import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iwiztfl2j.css';
import '../../css/y/yhf7tdbdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iwiztfl2j"/><path clip-rule="evenodd" class="yhf7tdbdm"/></g>`,
		"fallback": "reicon:money-withdraw-filled",
	});
}

export default Component;
