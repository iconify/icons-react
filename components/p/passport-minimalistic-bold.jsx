import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ozdkyobjs.css';
import '../../css/o/onrdkcgyc.css';
import '../../css/h/hlhch7b9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ozdkyobjs"/><path class="onrdkcgyc"/><path clip-rule="evenodd" class="hlhch7b9v"/></g>`,
		"fallback": "solar:passport-minimalistic-bold",
	});
}

export default Component;
