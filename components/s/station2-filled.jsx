import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gxfzg3ajy.css';
import '../../css/x/xuod9ccmn.css';
import '../../css/z/znudi822w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gxfzg3ajy"/><path class="xuod9ccmn"/><path clip-rule="evenodd" class="znudi822w"/></g>`,
		"fallback": "reicon:station2-filled",
	});
}

export default Component;
