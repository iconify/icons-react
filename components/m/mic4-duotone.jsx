import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w_bo51blv.css';
import '../../css/e/ev28lhkcq.css';
import '../../css/v/vxxv0vbbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w_bo51blv"/><path class="ev28lhkcq"/><path clip-rule="evenodd" class="vxxv0vbbn"/></g>`,
		"fallback": "reicon:mic4-duotone",
	});
}

export default Component;
