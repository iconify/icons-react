import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b7u1zqydj.css';
import '../../css/f/flt7_ccec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="b7u1zqydj"/><path class="flt7_ccec"/></g>`,
		"fallback": "reicon:swimming-filled",
	});
}

export default Component;
