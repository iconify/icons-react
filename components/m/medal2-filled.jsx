import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yw03i2bso.css';
import '../../css/f/fqcwyxbut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yw03i2bso"/><path class="fqcwyxbut"/></g>`,
		"fallback": "reicon:medal2-filled",
	});
}

export default Component;
